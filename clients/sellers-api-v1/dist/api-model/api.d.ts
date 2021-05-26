/**
 * Selling Partner API for Sellers
 * The Selling Partner API for Sellers lets you retrieve information on behalf of sellers about their seller account, such as the marketplaces they participate in. Along with listing the marketplaces that a seller can sell in, the API also provides additional information about the marketplace such as the default language and the default currency. The API also provides seller-specific information such as whether the seller has suspended listings in that marketplace.
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance } from 'axios';
import { RequestArgs, BaseAPI } from './base';
/**
 * The response schema for the getMarketplaceParticipations operation.
 * @export
 * @interface GetMarketplaceParticipationsResponse
 */
export interface GetMarketplaceParticipationsResponse {
    /**
     * List of marketplace participations.
     * @type {Array<MarketplaceParticipation>}
     * @memberof GetMarketplaceParticipationsResponse
     */
    payload?: Array<MarketplaceParticipation>;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetMarketplaceParticipationsResponse
     */
    errors?: Array<Error>;
}
/**
 * Detailed information about an Amazon market where a seller can list items for sale and customers can view and purchase items.
 * @export
 * @interface Marketplace
 */
export interface Marketplace {
    /**
     * The encrypted marketplace value.
     * @type {string}
     * @memberof Marketplace
     */
    id: string;
    /**
     * Marketplace name.
     * @type {string}
     * @memberof Marketplace
     */
    name: string;
    /**
     * The ISO 3166-1 alpha-2 format country code of the marketplace.
     * @type {string}
     * @memberof Marketplace
     */
    countryCode: string;
    /**
     * The ISO 4217 format currency code of the marketplace.
     * @type {string}
     * @memberof Marketplace
     */
    defaultCurrencyCode: string;
    /**
     * The ISO 639-1 format language code of the marketplace.
     * @type {string}
     * @memberof Marketplace
     */
    defaultLanguageCode: string;
    /**
     * The domain name of the marketplace.
     * @type {string}
     * @memberof Marketplace
     */
    domainName: string;
}
/**
 *
 * @export
 * @interface MarketplaceParticipation
 */
export interface MarketplaceParticipation {
    /**
     *
     * @type {Marketplace}
     * @memberof MarketplaceParticipation
     */
    marketplace: Marketplace;
    /**
     *
     * @type {Participation}
     * @memberof MarketplaceParticipation
     */
    participation: Participation;
}
/**
 * Error response returned when the request is unsuccessful.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * An error code that identifies the type of error that occured.
     * @type {string}
     * @memberof ModelError
     */
    code: string;
    /**
     * A message that describes the error condition in a human-readable form.
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Additional details that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}
/**
 * Detailed information that is specific to a seller in a Marketplace.
 * @export
 * @interface Participation
 */
export interface Participation {
    /**
     *
     * @type {boolean}
     * @memberof Participation
     */
    isParticipating: boolean;
    /**
     * Specifies if the seller has suspended listings. True if the seller Listing Status is set to Inactive, otherwise False.
     * @type {boolean}
     * @memberof Participation
     */
    hasSuspendedListings: boolean;
}
/**
 * SellersApi - axios parameter creator
 * @export
 */
export declare const SellersApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller\'s participation in those marketplaces.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .016 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMarketplaceParticipations: (options?: any) => Promise<RequestArgs>;
};
/**
 * SellersApi - functional programming interface
 * @export
 */
export declare const SellersApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller\'s participation in those marketplaces.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .016 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMarketplaceParticipations(options?: any): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GetMarketplaceParticipationsResponse>>;
};
/**
 * SellersApi - factory interface
 * @export
 */
export declare const SellersApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller\'s participation in those marketplaces.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .016 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMarketplaceParticipations(options?: any): AxiosPromise<GetMarketplaceParticipationsResponse>;
};
/**
 * SellersApi - object-oriented interface
 * @export
 * @class SellersApi
 * @extends {BaseAPI}
 */
export declare class SellersApi extends BaseAPI {
    /**
     * Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller\'s participation in those marketplaces.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .016 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellersApi
     */
    getMarketplaceParticipations(options?: any): Promise<import("axios").AxiosResponse<GetMarketplaceParticipationsResponse>>;
}