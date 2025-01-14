/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon\'s fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { GetPreorderInfoResult } from './get-preorder-info-result';

/**
 * The response schema for the getPreorderInfo operation.
 * @export
 * @interface GetPreorderInfoResponse
 */
export interface GetPreorderInfoResponse {
    /**
     * 
     * @type {GetPreorderInfoResult}
     * @memberof GetPreorderInfoResponse
     */
    payload?: GetPreorderInfoResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetPreorderInfoResponse
     */
    errors?: Array<Error>;
}


