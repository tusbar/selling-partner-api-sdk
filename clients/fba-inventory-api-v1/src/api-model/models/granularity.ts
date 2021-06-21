/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon\'s fulfillment network. Today this API is available only in the North America region. In 2021 we plan to release this API in the Europe and Far East regions.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Describes a granularity at which inventory data can be aggregated. For example, if you use Marketplace granularity, the fulfillable quantity will reflect inventory that could be fulfilled in the given marketplace.
 * @export
 * @interface Granularity
 */
export interface Granularity {
    /**
     * The granularity type for the inventory aggregation level.
     * @type {string}
     * @memberof Granularity
     */
    granularityType?: GranularityGranularityTypeEnum;
    /**
     * The granularity ID for the specified granularity type. When granularityType is Marketplace, specify the marketplaceId.
     * @type {string}
     * @memberof Granularity
     */
    granularityId?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum GranularityGranularityTypeEnum {
    Marketplace = 'Marketplace'
}


