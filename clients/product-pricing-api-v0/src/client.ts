/* eslint-disable prefer-regex-literals */
import {Configuration, ProductPricingApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {ProductPricingApiError} from './error'

export const RATE_LIMITS = [
  {
    urlRegex: new RegExp('^/products/pricing/v0/price$'),
    rate: 10,
    burst: 20
  },
  {
    urlRegex: new RegExp('^/products/pricing/v0/competitivePrice$'),
    rate: 10,
    burst: 20
  },
  {
    urlRegex: new RegExp('^/products/pricing/v0/listings/[^/]*/offers$'),
    rate: 5,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/products/pricing/v0/items/[^/]*/offers$'),
    rate: 5,
    burst: 10
  }
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class ProductPricingApiClient extends ProductPricingApi {
  constructor(parameters: ClientParameters) {
    const region = awsRegionByCode[parameters.region] ?? parameters.region
    const {rateLimiting, ...clientParameters} = parameters
    const axiosParameters: ClientConfiguration = {...clientParameters, region}

    if (rateLimiting?.retry) {
      axiosParameters.rateLimits = RATE_LIMITS
      axiosParameters.onRetry = rateLimiting.onRetry
    }

    const axiosInstance = createAxiosInstance(axiosParameters)
    const configuration = new Configuration()
    const environment = parameters.sandbox ? 'sandbox' : 'production'
    const endpoint = endpoints[environment][region]

    if (!endpoint) {
      throw new ProductPricingApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

