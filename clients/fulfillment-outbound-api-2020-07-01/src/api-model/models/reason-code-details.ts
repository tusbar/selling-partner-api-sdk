/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A return reason code, a description, and an optional description translation.
 * @export
 * @interface ReasonCodeDetails
 */
export interface ReasonCodeDetails {
    /**
     * A code that indicates a valid return reason.
     * @type {string}
     * @memberof ReasonCodeDetails
     */
    returnReasonCode: string;
    /**
     * A human readable description of the return reason code.
     * @type {string}
     * @memberof ReasonCodeDetails
     */
    description: string;
    /**
     * A translation of the description. The translation is in the language specified in the Language request parameter.
     * @type {string}
     * @memberof ReasonCodeDetails
     */
    translatedDescription?: string;
}


