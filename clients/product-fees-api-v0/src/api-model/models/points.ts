/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { MoneyType } from './money-type';

/**
 * 
 * @export
 * @interface Points
 */
export interface Points {
    /**
     * 
     * @type {number}
     * @memberof Points
     */
    PointsNumber?: number;
    /**
     * 
     * @type {MoneyType}
     * @memberof Points
     */
    PointsMonetaryValue?: MoneyType;
}


