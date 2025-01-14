/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The number of offer listings with the specified condition.
 * @export
 * @interface OfferListingCountType
 */
export interface OfferListingCountType {
    /**
     * The number of offer listings.
     * @type {number}
     * @memberof OfferListingCountType
     */
    Count: number;
    /**
     * The condition of the item.
     * @type {string}
     * @memberof OfferListingCountType
     */
    condition: string;
}


