/*
 * jwt-simple
 *
 * JSON Web Token encode and decode module for js
 *
 * Copyright(c) 2011 Kazuhito Hokamura
 * MIT Licensed
 */

/**
 * module dependencies
 */
var crypto = require("crypto");

/**
 * support algorithm mapping
 */
var algorithmMap = {
  HS256: "sha256",
};

/**
 * Map algorithm to hmac or sign type, to determine which crypto function to use
 */
var typeMap = {
  HS256: "hmac",
};

var jwt = {};

/**
 * version
 */
jwt.version = "0.5.6";

/**
 * jwt sign
 *
 * @param {Object} payload
 * @param {String} key
 * @param {String} algorithm
 * @param {Object} options
 * @return {String} token
 * @api public
 */
jwt.sign = function (payload, key, algorithm, options) {
  // Check key
  if (!key) {
    throw new Error("Require key");
  }

  // Check algorithm, default is HS256
  if (!algorithm) {
    algorithm = "HS256";
  }

  var signingMethod = algorithmMap[algorithm];
  var signingType = typeMap[algorithm];
  if (!signingMethod || !signingType) {
    throw new Error("Algorithm not supported");
  }

  // header, typ is fixed value.
  var header = { typ: "JWT", alg: algorithm };
  if (options && options.header) {
    assignProperties(header, options.header);
  }

  // create segments, all segments should be base64 string
  var segments = [];
  segments.push(base64urlEncode(JSON.stringify(header)));
  segments.push(base64urlEncode(JSON.stringify(payload)));
  segments.push(sign(segments.join("."), key, signingMethod, signingType));

  return segments.join(".");
};

/**
 * jwt verify
 *
 * @param {Object} token
 * @param {String} key
 * @param {Boolean} [noVerify]
 * @param {String} [algorithm]
 * @return {Object} payload
 * @api public
 */
jwt.verify = function (token, key, noVerify, algorithm) {
  // check token
  if (!token) {
    throw new Error("No token supplied");
  }
  // check segments
  var segments = token.split(".");
  if (segments.length !== 3) {
    throw new Error("Not enough or too many segments");
  }

  // All segment should be base64
  var headerSeg = segments[0];
  var payloadSeg = segments[1];
  var signatureSeg = segments[2];

  // base64 decode and parse JSON
  var header = JSON.parse(base64urlDecode(headerSeg));
  var payload = JSON.parse(base64urlDecode(payloadSeg));

  if (!noVerify) {
    var signingMethod = algorithmMap[algorithm || header.alg];
    var signingType = typeMap[algorithm || header.alg];
    if (!signingMethod || !signingType) {
      throw new Error("Algorithm not supported");
    }

    // verify signature. `sign` will return base64 string.
    var signingInput = [headerSeg, payloadSeg].join(".");
    if (!verify(signingInput, key, signingMethod, signingType, signatureSeg)) {
      throw new Error("Signature verification failed");
    }

    // Support for nbf and exp claims.
    // According to the RFC, they should be in seconds.
    if (payload.nbf && Date.now() < payload.nbf * 1000) {
      throw new Error("Token not yet active");
    }

    if (payload.exp && Date.now() > payload.exp * 1000) {
      throw new Error("Token expired");
    }
  }

  return payload;
};

/*
 * Copyright(c) 2021 khulnasoft
 * MIT licensed
 */
/**
 *
 */
jwt.generate = function (key, algorithm, claims, validInSeconds) {
  var _claims = Object.assign(claims, {
    exp: Math.floor(Date.now() / 1000) + validInSeconds,
  });
  return this.sign(_claims, key, algorithm);
};

/**
 * private util functions
 */

function sign(input, key, method, type) {
  var base64str;
  if (type === "hmac") {
    base64str = crypto.createHmac(method, key).update(input).digest("base64");
  } else {
    throw new Error("Algorithm type not recognized");
  }

  return base64urlEscape(base64str);
}

function verify(input, key, method, type, signature) {
  if (type === "hmac") {
    return signature === sign(input, key, method, type);
  } else if (type == "sign") {
    return crypto
      .createVerify(method)
      .update(input)
      .verify(key, base64urlUnescape(signature), "base64");
  } else {
    throw new Error("Algorithm type not recognized");
  }
}

function assignProperties(dest, source) {
  for (var attr in source) {
    if (source.hasOwnProperty(attr)) {
      dest[attr] = source[attr];
    }
  }
}

function base64urlDecode(str) {
  return Buffer.from(base64urlUnescape(str), "base64").toString();
}

function base64urlUnescape(str) {
  str += new Array(5 - (str.length % 4)).join("=");
  return str.replace(/\-/g, "+").replace(/_/g, "/");
}

function base64urlEncode(str) {
  return base64urlEscape(Buffer.from(str).toString("base64"));
}

function base64urlEscape(str) {
  return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

export default jwt;
