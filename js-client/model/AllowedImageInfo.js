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
 * The AllowedImageInfo model module.
 * @module model/AllowedImageInfo
 * @version 0.0.23
 */
class AllowedImageInfo {
    /**
     * Constructs a new <code>AllowedImageInfo</code>.
     * @alias module:model/AllowedImageInfo
     * @param imageName {String} Name of the docker image to allow. Do not specify the image tag (the part after the colon)
     * @param imageTags {Array.<String>} List of tags that are allowed for this image. Can be set to [\"*\"] to allow all tags.
     */
    constructor(imageName, imageTags) { 
        
        AllowedImageInfo.initialize(this, imageName, imageTags);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, imageName, imageTags) { 
        obj['image_name'] = imageName;
        obj['image_tags'] = imageTags;
    }

    /**
     * Constructs a <code>AllowedImageInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllowedImageInfo} obj Optional instance to populate.
     * @return {module:model/AllowedImageInfo} The populated <code>AllowedImageInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllowedImageInfo();

            if (data.hasOwnProperty('image_name')) {
                obj['image_name'] = ApiClient.convertToType(data['image_name'], 'String');
            }
            if (data.hasOwnProperty('image_tags')) {
                obj['image_tags'] = ApiClient.convertToType(data['image_tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * Name of the docker image to allow. Do not specify the image tag (the part after the colon)
 * @member {String} image_name
 */
AllowedImageInfo.prototype['image_name'] = undefined;

/**
 * List of tags that are allowed for this image. Can be set to [\"*\"] to allow all tags.
 * @member {Array.<String>} image_tags
 */
AllowedImageInfo.prototype['image_tags'] = undefined;

/**
 * A collection of arbitrary key-value pairs associated with this image that does not need predefined structure.
 * @member {Object.<String, String>} metadata
 */
AllowedImageInfo.prototype['metadata'] = undefined;






export default AllowedImageInfo;

