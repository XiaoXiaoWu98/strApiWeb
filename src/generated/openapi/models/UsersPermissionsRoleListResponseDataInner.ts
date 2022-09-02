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
import type { UsersPermissionsRoleListResponseDataInnerAttributes } from './UsersPermissionsRoleListResponseDataInnerAttributes';
import {
    UsersPermissionsRoleListResponseDataInnerAttributesFromJSON,
    UsersPermissionsRoleListResponseDataInnerAttributesFromJSONTyped,
    UsersPermissionsRoleListResponseDataInnerAttributesToJSON,
} from './UsersPermissionsRoleListResponseDataInnerAttributes';

/**
 * 
 * @export
 * @interface UsersPermissionsRoleListResponseDataInner
 */
export interface UsersPermissionsRoleListResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataInner
     */
    id?: string;
    /**
     * 
     * @type {UsersPermissionsRoleListResponseDataInnerAttributes}
     * @memberof UsersPermissionsRoleListResponseDataInner
     */
    attributes?: UsersPermissionsRoleListResponseDataInnerAttributes;
}

/**
 * Check if a given object implements the UsersPermissionsRoleListResponseDataInner interface.
 */
export function instanceOfUsersPermissionsRoleListResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersPermissionsRoleListResponseDataInnerFromJSON(json: any): UsersPermissionsRoleListResponseDataInner {
    return UsersPermissionsRoleListResponseDataInnerFromJSONTyped(json, false);
}

export function UsersPermissionsRoleListResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsRoleListResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : UsersPermissionsRoleListResponseDataInnerAttributesFromJSON(json['attributes']),
    };
}

export function UsersPermissionsRoleListResponseDataInnerToJSON(value?: UsersPermissionsRoleListResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'attributes': UsersPermissionsRoleListResponseDataInnerAttributesToJSON(value.attributes),
    };
}

