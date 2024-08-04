/**
 * Docknet API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Project model module.
 * @module model/Project
 * @version 0.0.23
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * @alias module:model/Project
     */
    constructor() { 
        
        Project.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_by')) {
                obj['updated_by'] = ApiClient.convertToType(data['updated_by'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('technical_project')) {
                obj['technical_project'] = ApiClient.convertToType(data['technical_project'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Resource ID. Identifies a resource in a given context and time, for example, in combination with its type. Used in API operations and/or configuration files.
 * @member {String} id
 * @default 'default-id'
 */
Project.prototype['id'] = 'default-id';

/**
 * Timestamp of the resource creation. Assigned by the server and read-only.
 * @member {Date} created_at
 */
Project.prototype['created_at'] = undefined;

/**
 * Resource name of the entity responsible for the creation of this resource. Assigned by the server and read-only.
 * @member {String} created_by
 */
Project.prototype['created_by'] = undefined;

/**
 * Timestamp of the last resource modification. Is updated when create/patch/delete operation is performed. Assigned by the server and read-only.
 * @member {Date} updated_at
 */
Project.prototype['updated_at'] = undefined;

/**
 * Resource name of the entity responsible for the last modification of this resource. Assigned by the server and read-only.
 * @member {String} updated_by
 */
Project.prototype['updated_by'] = undefined;

/**
 * A user-defined human-readable name of the resource. The name can be up to 128 characters long and can consist of any UTF-8 character.
 * @member {String} display_name
 */
Project.prototype['display_name'] = undefined;

/**
 * A user-defined short description about the resource. Can consist of any UTF-8 character.
 * @member {String} description
 * @default ''
 */
Project.prototype['description'] = '';

/**
 * Identifier or image URL used for displaying this resource.
 * @member {String} icon
 */
Project.prototype['icon'] = undefined;

/**
 * A collection of arbitrary key-value pairs associated with this resource that does not need predefined structure. Enable third-party integrations to decorate objects with additional metadata for their own use.
 * @member {Object.<String, String>} metadata
 */
Project.prototype['metadata'] = undefined;

/**
 * Allows to disable a resource without requiring deletion. A disabled resource is not shown and not accessible.
 * @member {Boolean} disabled
 * @default false
 */
Project.prototype['disabled'] = false;

/**
 * Indicates that this is a technical project created by the system.
 * @member {Boolean} technical_project
 * @default false
 */
Project.prototype['technical_project'] = false;






export default Project;

