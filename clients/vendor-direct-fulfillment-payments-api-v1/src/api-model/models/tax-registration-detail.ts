/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor\'s invoice data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Address } from './address';

/**
 * Tax registration details of the entity.
 * @export
 * @interface TaxRegistrationDetail
 */
export interface TaxRegistrationDetail {
    /**
     * Tax registration type for the entity.
     * @type {string}
     * @memberof TaxRegistrationDetail
     */
    taxRegistrationType?: TaxRegistrationDetailTaxRegistrationTypeEnum;
    /**
     * Tax registration number for the party. For example, VAT ID.
     * @type {string}
     * @memberof TaxRegistrationDetail
     */
    taxRegistrationNumber: string;
    /**
     * 
     * @type {Address}
     * @memberof TaxRegistrationDetail
     */
    taxRegistrationAddress?: Address;
    /**
     * Tax registration message that can be used for additional tax related details.
     * @type {string}
     * @memberof TaxRegistrationDetail
     */
    taxRegistrationMessage?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum TaxRegistrationDetailTaxRegistrationTypeEnum {
    Vat = 'VAT',
    Gst = 'GST'
}



