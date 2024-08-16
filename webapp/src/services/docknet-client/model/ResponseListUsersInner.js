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
import User from './User';
import UserRead from './UserRead';

/**
 * The ResponseListUsersInner model module.
 * @module model/ResponseListUsersInner
 * @version 0.0.22
 */
class ResponseListUsersInner {
  /**
   * Constructs a new <code>ResponseListUsersInner</code>.
   * @alias module:model/ResponseListUsersInner
   * @implements module:model/User
   * @implements module:model/UserRead
   * @param id {String} Unique ID of the user.
   */
  constructor(id) {
    User.initialize(this, id);
    UserRead.initialize(this, id);
    ResponseListUsersInner.initialize(this, id);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, id) {
    obj['id'] = id;
  }

  /**
   * Constructs a <code>ResponseListUsersInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseListUsersInner} obj Optional instance to populate.
   * @return {module:model/ResponseListUsersInner} The populated <code>ResponseListUsersInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseListUsersInner();
      User.constructFromObject(data, obj);
      UserRead.constructFromObject(data, obj);

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('technical_user')) {
        obj['technical_user'] = ApiClient.convertToType(
          data['technical_user'],
          'Boolean'
        );
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('last_activity')) {
        obj['last_activity'] = ApiClient.convertToType(
          data['last_activity'],
          'Date'
        );
      }
      if (data.hasOwnProperty('has_password')) {
        obj['has_password'] = ApiClient.convertToType(
          data['has_password'],
          'Boolean'
        );
      }
    }
    return obj;
  }
}

/**
 * A unique username on the system.
 * @member {String} username
 */
ResponseListUsersInner.prototype['username'] = undefined;

/**
 * User email address.
 * @member {String} email
 */
ResponseListUsersInner.prototype['email'] = undefined;

/**
 * Indicates that user is disabled. Disabling a user will prevent any access to user-accessible resources.
 * @member {Boolean} disabled
 * @default false
 */
ResponseListUsersInner.prototype['disabled'] = false;

/**
 * Unique ID of the user.
 * @member {String} id
 */
ResponseListUsersInner.prototype['id'] = undefined;

/**
 * Indicates if the user is a technical user created by the system.
 * @member {Boolean} technical_user
 * @default false
 */
ResponseListUsersInner.prototype['technical_user'] = false;

/**
 * Timestamp of the user creation. Assigned by the server and read-only.
 * @member {Date} created_at
 */
ResponseListUsersInner.prototype['created_at'] = undefined;

/**
 * Last time the user accessed the system. Right now this is only updated when the user calls the /users/me endpoint so that call should always be done when the user loads the UI.
 * @member {Date} last_activity
 */
ResponseListUsersInner.prototype['last_activity'] = undefined;

/**
 * Indicates if the user log in with password or SSO
 * @member {Boolean} has_password
 * @default true
 */
ResponseListUsersInner.prototype['has_password'] = true;

// Implement User interface:
/**
 * A unique username on the system.
 * @member {String} username
 */
User.prototype['username'] = undefined;
/**
 * User email address.
 * @member {String} email
 */
User.prototype['email'] = undefined;
/**
 * Indicates that user is disabled. Disabling a user will prevent any access to user-accessible resources.
 * @member {Boolean} disabled
 * @default false
 */
User.prototype['disabled'] = false;
/**
 * Unique ID of the user.
 * @member {String} id
 */
User.prototype['id'] = undefined;
/**
 * Indicates if the user is a technical user created by the system.
 * @member {Boolean} technical_user
 * @default false
 */
User.prototype['technical_user'] = false;
/**
 * Timestamp of the user creation. Assigned by the server and read-only.
 * @member {Date} created_at
 */
User.prototype['created_at'] = undefined;
/**
 * Last time the user accessed the system. Right now this is only updated when the user calls the /users/me endpoint so that call should always be done when the user loads the UI.
 * @member {Date} last_activity
 */
User.prototype['last_activity'] = undefined;
/**
 * Indicates if the user log in with password or SSO
 * @member {Boolean} has_password
 * @default true
 */
User.prototype['has_password'] = true;
// Implement UserRead interface:
/**
 * A unique username on the system.
 * @member {String} username
 */
UserRead.prototype['username'] = undefined;
/**
 * User email address.
 * @member {String} email
 */
UserRead.prototype['email'] = undefined;
/**
 * Indicates that user is disabled. Disabling a user will prevent any access to user-accessible resources.
 * @member {Boolean} disabled
 * @default false
 */
UserRead.prototype['disabled'] = false;
/**
 * Unique ID of the user.
 * @member {String} id
 */
UserRead.prototype['id'] = undefined;

export default ResponseListUsersInner;