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


import { TransportStatus } from './transport-status';

/**
 * The workflow status for a shipment with an Amazon-partnered carrier.
 * @export
 * @interface TransportResult
 */
export interface TransportResult {
    /**
     * 
     * @type {TransportStatus}
     * @memberof TransportResult
     */
    TransportStatus: TransportStatus;
    /**
     * An error code that identifies the type of error that occured.
     * @type {string}
     * @memberof TransportResult
     */
    ErrorCode?: string;
    /**
     * A message that describes the error condition.
     * @type {string}
     * @memberof TransportResult
     */
    ErrorDescription?: string;
}

