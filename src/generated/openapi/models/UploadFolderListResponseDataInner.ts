/* tslint:disable */
/* eslint-disable */
/**
 * DOCUMENTATION
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UploadFolderListResponseDataInnerAttributes } from './UploadFolderListResponseDataInnerAttributes';
import {
    UploadFolderListResponseDataInnerAttributesFromJSON,
    UploadFolderListResponseDataInnerAttributesFromJSONTyped,
    UploadFolderListResponseDataInnerAttributesToJSON,
} from './UploadFolderListResponseDataInnerAttributes';

/**
 * 
 * @export
 * @interface UploadFolderListResponseDataInner
 */
export interface UploadFolderListResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof UploadFolderListResponseDataInner
     */
    id?: string;
    /**
     * 
     * @type {UploadFolderListResponseDataInnerAttributes}
     * @memberof UploadFolderListResponseDataInner
     */
    attributes?: UploadFolderListResponseDataInnerAttributes;
}

/**
 * Check if a given object implements the UploadFolderListResponseDataInner interface.
 */
export function instanceOfUploadFolderListResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UploadFolderListResponseDataInnerFromJSON(json: any): UploadFolderListResponseDataInner {
    return UploadFolderListResponseDataInnerFromJSONTyped(json, false);
}

export function UploadFolderListResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadFolderListResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : UploadFolderListResponseDataInnerAttributesFromJSON(json['attributes']),
    };
}

export function UploadFolderListResponseDataInnerToJSON(value?: UploadFolderListResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'attributes': UploadFolderListResponseDataInnerAttributesToJSON(value.attributes),
    };
}

