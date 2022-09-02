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
 * @interface AuthForgotPasswordPostRequest
 */
export interface AuthForgotPasswordPostRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthForgotPasswordPostRequest
     */
    email?: string;
}

/**
 * Check if a given object implements the AuthForgotPasswordPostRequest interface.
 */
export function instanceOfAuthForgotPasswordPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthForgotPasswordPostRequestFromJSON(json: any): AuthForgotPasswordPostRequest {
    return AuthForgotPasswordPostRequestFromJSONTyped(json, false);
}

export function AuthForgotPasswordPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthForgotPasswordPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function AuthForgotPasswordPostRequestToJSON(value?: AuthForgotPasswordPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
    };
}

