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
import Compute from './Compute';

/**
 * The JobInput model module.
 * @module model/JobInput
 * @version 0.0.23
 */
class JobInput {
    /**
     * Constructs a new <code>JobInput</code>.
     * @alias module:model/JobInput
     * @param containerImage {String} The container image used for this deployment.
     */
    constructor(containerImage) { 
        
        JobInput.initialize(this, containerImage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, containerImage) { 
        obj['container_image'] = containerImage;
    }

    /**
     * Constructs a <code>JobInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobInput} obj Optional instance to populate.
     * @return {module:model/JobInput} The populated <code>JobInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobInput();

            if (data.hasOwnProperty('container_image')) {
                obj['container_image'] = ApiClient.convertToType(data['container_image'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('compute')) {
                obj['compute'] = Compute.constructFromObject(data['compute']);
            }
            if (data.hasOwnProperty('command')) {
                obj['command'] = ApiClient.convertToType(data['command'], ['String']);
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], ['String']);
            }
            if (data.hasOwnProperty('requirements')) {
                obj['requirements'] = ApiClient.convertToType(data['requirements'], ['String']);
            }
            if (data.hasOwnProperty('endpoints')) {
                obj['endpoints'] = ApiClient.convertToType(data['endpoints'], ['String']);
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
        }
        return obj;
    }


}

/**
 * The container image used for this deployment.
 * @member {String} container_image
 */
JobInput.prototype['container_image'] = undefined;

/**
 * Parameters (environment variables) for this deployment.
 * @member {Object.<String, String>} parameters
 */
JobInput.prototype['parameters'] = undefined;

/**
 * @member {module:model/Compute} compute
 */
JobInput.prototype['compute'] = undefined;

/**
 * Command to run within the deployment. This overwrites the existing docker ENTRYPOINT.
 * @member {Array.<String>} command
 */
JobInput.prototype['command'] = undefined;

/**
 * Arguments to the command/entrypoint. This overwrites the existing docker CMD.
 * @member {Array.<String>} args
 */
JobInput.prototype['args'] = undefined;

/**
 * Additional requirements for deployment.
 * @member {Array.<String>} requirements
 */
JobInput.prototype['requirements'] = undefined;

/**
 * A list of HTTP endpoints that can be accessed. This should always have an internal port and can include additional instructions, such as the URL path.
 * @member {Array.<String>} endpoints
 */
JobInput.prototype['endpoints'] = undefined;

/**
 * A user-defined human-readable name of the resource. The name can be up to 128 characters long and can consist of any UTF-8 character.
 * @member {String} display_name
 */
JobInput.prototype['display_name'] = undefined;

/**
 * A user-defined short description about the resource. Can consist of any UTF-8 character.
 * @member {String} description
 * @default ''
 */
JobInput.prototype['description'] = '';

/**
 * Identifier or image URL used for displaying this resource.
 * @member {String} icon
 */
JobInput.prototype['icon'] = undefined;

/**
 * A collection of arbitrary key-value pairs associated with this resource that does not need predefined structure. Enable third-party integrations to decorate objects with additional metadata for their own use.
 * @member {Object.<String, String>} metadata
 */
JobInput.prototype['metadata'] = undefined;

/**
 * Allows to disable a resource without requiring deletion. A disabled resource is not shown and not accessible.
 * @member {Boolean} disabled
 * @default false
 */
JobInput.prototype['disabled'] = false;






export default JobInput;

