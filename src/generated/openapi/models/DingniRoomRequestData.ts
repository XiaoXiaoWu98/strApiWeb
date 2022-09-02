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
import type { ChefRequestDataDingniRoomsInner } from './ChefRequestDataDingniRoomsInner';
import {
    ChefRequestDataDingniRoomsInnerFromJSON,
    ChefRequestDataDingniRoomsInnerFromJSONTyped,
    ChefRequestDataDingniRoomsInnerToJSON,
} from './ChefRequestDataDingniRoomsInner';

/**
 * 
 * @export
 * @interface DingniRoomRequestData
 */
export interface DingniRoomRequestData {
    /**
     * 
     * @type {string}
     * @memberof DingniRoomRequestData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DingniRoomRequestData
     */
    address?: string;
    /**
     * 
     * @type {Array<ChefRequestDataDingniRoomsInner>}
     * @memberof DingniRoomRequestData
     */
    chefs?: Array<ChefRequestDataDingniRoomsInner>;
}

/**
 * Check if a given object implements the DingniRoomRequestData interface.
 */
export function instanceOfDingniRoomRequestData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DingniRoomRequestDataFromJSON(json: any): DingniRoomRequestData {
    return DingniRoomRequestDataFromJSONTyped(json, false);
}

export function DingniRoomRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DingniRoomRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'chefs': !exists(json, 'chefs') ? undefined : ((json['chefs'] as Array<any>).map(ChefRequestDataDingniRoomsInnerFromJSON)),
    };
}

export function DingniRoomRequestDataToJSON(value?: DingniRoomRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'address': value.address,
        'chefs': value.chefs === undefined ? undefined : ((value.chefs as Array<any>).map(ChefRequestDataDingniRoomsInnerToJSON)),
    };
}

