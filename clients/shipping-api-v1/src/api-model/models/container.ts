/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ContainerItem } from './container-item';
import { Currency } from './currency';
import { Dimensions } from './dimensions';
import { Weight } from './weight';

/**
 * Container in the shipment.
 * @export
 * @interface Container
 */
export interface Container {
    /**
     * The type of physical container being used. (always \'PACKAGE\')
     * @type {string}
     * @memberof Container
     */
    containerType?: ContainerContainerTypeEnum;
    /**
     * An identifier for the container. This must be unique within all the containers in the same shipment.
     * @type {string}
     * @memberof Container
     */
    containerReferenceId: string;
    /**
     * 
     * @type {Currency}
     * @memberof Container
     */
    value: Currency;
    /**
     * 
     * @type {Dimensions}
     * @memberof Container
     */
    dimensions: Dimensions;
    /**
     * A list of the items in the container.
     * @type {Array<ContainerItem>}
     * @memberof Container
     */
    items: Array<ContainerItem>;
    /**
     * 
     * @type {Weight}
     * @memberof Container
     */
    weight: Weight;
}

/**
    * @export
    * @enum {string}
    */
export enum ContainerContainerTypeEnum {
    Package = 'PACKAGE'
}



