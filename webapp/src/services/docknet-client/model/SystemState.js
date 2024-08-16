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
 * Enum class SystemState.
 * @enum {}
 * @readonly
 */
export default class SystemState {
  /**
   * value: "uninitialized"
   * @const
   */
  uninitialized = 'uninitialized';

  /**
   * value: "running"
   * @const
   */
  running = 'running';

  /**
   * Returns a <code>SystemState</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/SystemState} The enum <code>SystemState</code> value.
   */
  static constructFromObject(object) {
    return object;
  }
}
