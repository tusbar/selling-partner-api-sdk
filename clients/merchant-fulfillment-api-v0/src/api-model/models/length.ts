/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { UnitOfLength } from './unit-of-length';

/**
 * The length.
 * @export
 * @interface Length
 */
export interface Length {
    /**
     * The value in units.
     * @type {number}
     * @memberof Length
     */
    value?: number;
    /**
     * 
     * @type {UnitOfLength}
     * @memberof Length
     */
    unit?: UnitOfLength;
}


