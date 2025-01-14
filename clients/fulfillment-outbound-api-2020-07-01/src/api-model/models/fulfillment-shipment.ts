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


import { FulfillmentShipmentItem } from './fulfillment-shipment-item';
import { FulfillmentShipmentPackage } from './fulfillment-shipment-package';

/**
 * Delivery and item information for a shipment in a fulfillment order.
 * @export
 * @interface FulfillmentShipment
 */
export interface FulfillmentShipment {
    /**
     * A shipment identifier assigned by Amazon.
     * @type {string}
     * @memberof FulfillmentShipment
     */
    amazonShipmentId: string;
    /**
     * An identifier for the fulfillment center that the shipment will be sent from.
     * @type {string}
     * @memberof FulfillmentShipment
     */
    fulfillmentCenterId: string;
    /**
     * The current status of the shipment.
     * @type {string}
     * @memberof FulfillmentShipment
     */
    fulfillmentShipmentStatus: FulfillmentShipmentFulfillmentShipmentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    shippingDate?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipment
     */
    estimatedArrivalDate?: string;
    /**
     * Provides additional insight into shipment timeline. Primairly used to communicate that actual delivery dates aren\'t available.
     * @type {Array<string>}
     * @memberof FulfillmentShipment
     */
    shippingNotes?: Array<string>;
    /**
     * An array of fulfillment shipment item information.
     * @type {Array<FulfillmentShipmentItem>}
     * @memberof FulfillmentShipment
     */
    fulfillmentShipmentItem: Array<FulfillmentShipmentItem>;
    /**
     * An array of fulfillment shipment package information.
     * @type {Array<FulfillmentShipmentPackage>}
     * @memberof FulfillmentShipment
     */
    fulfillmentShipmentPackage?: Array<FulfillmentShipmentPackage>;
}

/**
    * @export
    * @enum {string}
    */
export enum FulfillmentShipmentFulfillmentShipmentStatusEnum {
    Pending = 'PENDING',
    Shipped = 'SHIPPED',
    CancelledByFulfiller = 'CANCELLED_BY_FULFILLER',
    CancelledBySeller = 'CANCELLED_BY_SELLER'
}



