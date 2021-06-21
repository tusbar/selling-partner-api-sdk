/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * The version of the OpenAPI document: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Feed
 */
export interface Feed {
    /**
     * The identifier for the feed. This identifier is unique only in combination with a seller ID.
     * @type {string}
     * @memberof Feed
     */
    feedId: string;
    /**
     * The feed type.
     * @type {string}
     * @memberof Feed
     */
    feedType: string;
    /**
     * A list of identifiers for the marketplaces that the feed is applied to.
     * @type {Array<string>}
     * @memberof Feed
     */
    marketplaceIds?: Array<string>;
    /**
     * The date and time when the feed was created, in ISO 8601 date time format.
     * @type {string}
     * @memberof Feed
     */
    createdTime: string;
    /**
     * The processing status of the feed.
     * @type {string}
     * @memberof Feed
     */
    processingStatus: FeedProcessingStatusEnum;
    /**
     * The date and time when feed processing started, in ISO 8601 date time format.
     * @type {string}
     * @memberof Feed
     */
    processingStartTime?: string;
    /**
     * The date and time when feed processing completed, in ISO 8601 date time format.
     * @type {string}
     * @memberof Feed
     */
    processingEndTime?: string;
    /**
     * The identifier for the feed document. This identifier is unique only in combination with a seller ID.
     * @type {string}
     * @memberof Feed
     */
    resultFeedDocumentId?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum FeedProcessingStatusEnum {
    Cancelled = 'CANCELLED',
    Done = 'DONE',
    Fatal = 'FATAL',
    InProgress = 'IN_PROGRESS',
    InQueue = 'IN_QUEUE'
}


