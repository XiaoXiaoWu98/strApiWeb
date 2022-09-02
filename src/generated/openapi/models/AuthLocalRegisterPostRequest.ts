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
 * @interface AuthLocalRegisterPostRequest
 */
export interface AuthLocalRegisterPostRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthLocalRegisterPostRequest
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthLocalRegisterPostRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthLocalRegisterPostRequest
     */
    password?: string;
}

/**
 * Check if a given object implements the AuthLocalRegisterPostRequest interface.
 */
export function instanceOfAuthLocalRegisterPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthLocalRegisterPostRequestFromJSON(json: any): AuthLocalRegisterPostRequest {
    return AuthLocalRegisterPostRequestFromJSONTyped(json, false);
}

export function AuthLocalRegisterPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthLocalRegisterPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function AuthLocalRegisterPostRequestToJSON(value?: AuthLocalRegisterPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'email': value.email,
        'password': value.password,
    };
}

