/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Authorization
 * The Selling Partner API for Authorization helps developers manage authorizations and check the specific permissions associated with a given authorization.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GetAuthorizationCodeResponse } from '../models';
/**
 * AuthorizationApi - axios parameter creator
 * @export
 */
export const AuthorizationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * With the getAuthorizationCode operation, you can request a Login With Amazon (LWA) authorization code that will allow you to call a Selling Partner API on behalf of a seller who has already authorized you to call Amazon Marketplace Web Service (Amazon MWS). You specify a developer ID, an MWS auth token, and a seller ID. Taken together, these represent the Amazon MWS authorization that the seller previously granted you. The operation returns an LWA authorization code that can be exchanged for a refresh token and access token representing authorization to call the Selling Partner API on the seller\'s behalf. By using this API, sellers who have already authorized you for Amazon MWS do not need to re-authorize you for the Selling Partner API.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @summary Returns the Login with Amazon (LWA) authorization code for an existing Amazon MWS authorization.
         * @param {string} sellingPartnerId The seller ID of the seller for whom you are requesting Selling Partner API authorization. This must be the seller ID of the seller who authorized your application on the Marketplace Appstore.
         * @param {string} developerId Your developer ID. This must be one of the developer ID values that you provided when you registered your application in Developer Central.
         * @param {string} mwsAuthToken The MWS Auth Token that was generated when the seller authorized your application on the Marketplace Appstore.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthorizationCode: async (sellingPartnerId: string, developerId: string, mwsAuthToken: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellingPartnerId' is not null or undefined
            assertParamExists('getAuthorizationCode', 'sellingPartnerId', sellingPartnerId)
            // verify required parameter 'developerId' is not null or undefined
            assertParamExists('getAuthorizationCode', 'developerId', developerId)
            // verify required parameter 'mwsAuthToken' is not null or undefined
            assertParamExists('getAuthorizationCode', 'mwsAuthToken', mwsAuthToken)
            const localVarPath = `/authorization/v1/authorizationCode`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (sellingPartnerId !== undefined) {
                localVarQueryParameter['sellingPartnerId'] = sellingPartnerId;
            }

            if (developerId !== undefined) {
                localVarQueryParameter['developerId'] = developerId;
            }

            if (mwsAuthToken !== undefined) {
                localVarQueryParameter['mwsAuthToken'] = mwsAuthToken;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthorizationApi - functional programming interface
 * @export
 */
export const AuthorizationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthorizationApiAxiosParamCreator(configuration)
    return {
        /**
         * With the getAuthorizationCode operation, you can request a Login With Amazon (LWA) authorization code that will allow you to call a Selling Partner API on behalf of a seller who has already authorized you to call Amazon Marketplace Web Service (Amazon MWS). You specify a developer ID, an MWS auth token, and a seller ID. Taken together, these represent the Amazon MWS authorization that the seller previously granted you. The operation returns an LWA authorization code that can be exchanged for a refresh token and access token representing authorization to call the Selling Partner API on the seller\'s behalf. By using this API, sellers who have already authorized you for Amazon MWS do not need to re-authorize you for the Selling Partner API.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @summary Returns the Login with Amazon (LWA) authorization code for an existing Amazon MWS authorization.
         * @param {string} sellingPartnerId The seller ID of the seller for whom you are requesting Selling Partner API authorization. This must be the seller ID of the seller who authorized your application on the Marketplace Appstore.
         * @param {string} developerId Your developer ID. This must be one of the developer ID values that you provided when you registered your application in Developer Central.
         * @param {string} mwsAuthToken The MWS Auth Token that was generated when the seller authorized your application on the Marketplace Appstore.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthorizationCode(sellingPartnerId: string, developerId: string, mwsAuthToken: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAuthorizationCodeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthorizationCode(sellingPartnerId, developerId, mwsAuthToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthorizationApi - factory interface
 * @export
 */
export const AuthorizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthorizationApiFp(configuration)
    return {
        /**
         * With the getAuthorizationCode operation, you can request a Login With Amazon (LWA) authorization code that will allow you to call a Selling Partner API on behalf of a seller who has already authorized you to call Amazon Marketplace Web Service (Amazon MWS). You specify a developer ID, an MWS auth token, and a seller ID. Taken together, these represent the Amazon MWS authorization that the seller previously granted you. The operation returns an LWA authorization code that can be exchanged for a refresh token and access token representing authorization to call the Selling Partner API on the seller\'s behalf. By using this API, sellers who have already authorized you for Amazon MWS do not need to re-authorize you for the Selling Partner API.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @summary Returns the Login with Amazon (LWA) authorization code for an existing Amazon MWS authorization.
         * @param {string} sellingPartnerId The seller ID of the seller for whom you are requesting Selling Partner API authorization. This must be the seller ID of the seller who authorized your application on the Marketplace Appstore.
         * @param {string} developerId Your developer ID. This must be one of the developer ID values that you provided when you registered your application in Developer Central.
         * @param {string} mwsAuthToken The MWS Auth Token that was generated when the seller authorized your application on the Marketplace Appstore.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthorizationCode(sellingPartnerId: string, developerId: string, mwsAuthToken: string, options?: any): AxiosPromise<GetAuthorizationCodeResponse> {
            return localVarFp.getAuthorizationCode(sellingPartnerId, developerId, mwsAuthToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAuthorizationCode operation in AuthorizationApi.
 * @export
 * @interface AuthorizationApiGetAuthorizationCodeRequest
 */
export interface AuthorizationApiGetAuthorizationCodeRequest {
    /**
     * The seller ID of the seller for whom you are requesting Selling Partner API authorization. This must be the seller ID of the seller who authorized your application on the Marketplace Appstore.
     * @type {string}
     * @memberof AuthorizationApiGetAuthorizationCode
     */
    readonly sellingPartnerId: string

    /**
     * Your developer ID. This must be one of the developer ID values that you provided when you registered your application in Developer Central.
     * @type {string}
     * @memberof AuthorizationApiGetAuthorizationCode
     */
    readonly developerId: string

    /**
     * The MWS Auth Token that was generated when the seller authorized your application on the Marketplace Appstore.
     * @type {string}
     * @memberof AuthorizationApiGetAuthorizationCode
     */
    readonly mwsAuthToken: string
}

/**
 * AuthorizationApi - object-oriented interface
 * @export
 * @class AuthorizationApi
 * @extends {BaseAPI}
 */
export class AuthorizationApi extends BaseAPI {
    /**
     * With the getAuthorizationCode operation, you can request a Login With Amazon (LWA) authorization code that will allow you to call a Selling Partner API on behalf of a seller who has already authorized you to call Amazon Marketplace Web Service (Amazon MWS). You specify a developer ID, an MWS auth token, and a seller ID. Taken together, these represent the Amazon MWS authorization that the seller previously granted you. The operation returns an LWA authorization code that can be exchanged for a refresh token and access token representing authorization to call the Selling Partner API on the seller\'s behalf. By using this API, sellers who have already authorized you for Amazon MWS do not need to re-authorize you for the Selling Partner API.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @summary Returns the Login with Amazon (LWA) authorization code for an existing Amazon MWS authorization.
     * @param {AuthorizationApiGetAuthorizationCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorizationApi
     */
    public getAuthorizationCode(requestParameters: AuthorizationApiGetAuthorizationCodeRequest, options?: any) {
        return AuthorizationApiFp(this.configuration).getAuthorizationCode(requestParameters.sellingPartnerId, requestParameters.developerId, requestParameters.mwsAuthToken, options).then((request) => request(this.axios, this.basePath));
    }
}
