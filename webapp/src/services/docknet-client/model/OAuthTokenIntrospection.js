/**
 * Docknet API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.22
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OAuthTokenIntrospection model module.
 * @module model/OAuthTokenIntrospection
 * @version 0.0.22
 */
class OAuthTokenIntrospection {
  /**
   * Constructs a new <code>OAuthTokenIntrospection</code>.
   * @alias module:model/OAuthTokenIntrospection
   * @param active {Boolean} Indicator of whether or not the presented token is currently active.
   */
  constructor(active) {
    OAuthTokenIntrospection.initialize(this, active);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, active) {
    obj['active'] = active;
  }

  /**
   * Constructs a <code>OAuthTokenIntrospection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OAuthTokenIntrospection} obj Optional instance to populate.
   * @return {module:model/OAuthTokenIntrospection} The populated <code>OAuthTokenIntrospection</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OAuthTokenIntrospection();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(
          data['token_type'],
          'String'
        );
      }
      if (data.hasOwnProperty('exp')) {
        obj['exp'] = ApiClient.convertToType(data['exp'], 'Number');
      }
      if (data.hasOwnProperty('iat')) {
        obj['iat'] = ApiClient.convertToType(data['iat'], 'Number');
      }
      if (data.hasOwnProperty('nbf')) {
        obj['nbf'] = ApiClient.convertToType(data['nbf'], 'Number');
      }
      if (data.hasOwnProperty('sub')) {
        obj['sub'] = ApiClient.convertToType(data['sub'], 'String');
      }
      if (data.hasOwnProperty('aud')) {
        obj['aud'] = ApiClient.convertToType(data['aud'], 'String');
      }
      if (data.hasOwnProperty('iss')) {
        obj['iss'] = ApiClient.convertToType(data['iss'], 'String');
      }
      if (data.hasOwnProperty('jti')) {
        obj['jti'] = ApiClient.convertToType(data['jti'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
    }
    return obj;
  }
}

/**
 * Indicator of whether or not the presented token is currently active.
 * @member {Boolean} active
 */
OAuthTokenIntrospection.prototype['active'] = undefined;

/**
 * A space-delimited list of scopes.
 * @member {String} scope
 */
OAuthTokenIntrospection.prototype['scope'] = undefined;

/**
 * Client identifier for the OAuth 2.0 client that requested this token.
 * @member {String} client_id
 */
OAuthTokenIntrospection.prototype['client_id'] = undefined;

/**
 * Human-readable identifier for the resource owner who authorized this token.
 * @member {String} username
 */
OAuthTokenIntrospection.prototype['username'] = undefined;

/**
 * Type of the token as defined in Section 5.1 of OAuth 2.0 [RFC6749].
 * @member {String} token_type
 */
OAuthTokenIntrospection.prototype['token_type'] = undefined;

/**
 * Timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token will expire, as defined in JWT [RFC7519].
 * @member {Number} exp
 */
OAuthTokenIntrospection.prototype['exp'] = undefined;

/**
 * Timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token was originally issued, as defined in JWT [RFC7519].
 * @member {Number} iat
 */
OAuthTokenIntrospection.prototype['iat'] = undefined;

/**
 * Timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token is not to be used before, as defined in JWT [RFC7519].
 * @member {Number} nbf
 */
OAuthTokenIntrospection.prototype['nbf'] = undefined;

/**
 * Subject of the token, as defined in JWT [RFC7519]. Usually a machine-readable identifier of the resource owner who authorized this token.
 * @member {String} sub
 */
OAuthTokenIntrospection.prototype['sub'] = undefined;

/**
 * Service-specific string identifier or list of string identifiers representing the intended audience for this token, as defined in JWT [RFC7519].
 * @member {String} aud
 */
OAuthTokenIntrospection.prototype['aud'] = undefined;

/**
 * String representing the issuer of this token, as defined in JWT [RFC7519].
 * @member {String} iss
 */
OAuthTokenIntrospection.prototype['iss'] = undefined;

/**
 * String identifier for the token, as defined in JWT [RFC7519].
 * @member {String} jti
 */
OAuthTokenIntrospection.prototype['jti'] = undefined;

/**
 * The user ID. This parameter is returned only if the token is an access token and the subject is an end user.
 * @member {String} uid
 */
OAuthTokenIntrospection.prototype['uid'] = undefined;

export default OAuthTokenIntrospection;
