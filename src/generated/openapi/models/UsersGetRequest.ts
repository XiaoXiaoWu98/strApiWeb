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
/**
 * 
 * @export
 * @interface UsersGetRequest
 */
export interface UsersGetRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersGetRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UsersGetRequest
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof UsersGetRequest
     */
    password: string;
}

/**
 * Check if a given object implements the UsersGetRequest interface.
 */
export function instanceOfUsersGetRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function UsersGetRequestFromJSON(json: any): UsersGetRequest {
    return UsersGetRequestFromJSONTyped(json, false);
}

export function UsersGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersGetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'username': json['username'],
        'password': json['password'],
    };
}

export function UsersGetRequestToJSON(value?: UsersGetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'username': value.username,
        'password': value.password,
    };
}

