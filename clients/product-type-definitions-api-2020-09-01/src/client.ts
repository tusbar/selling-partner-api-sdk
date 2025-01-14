/* eslint-disable prefer-regex-literals */
import {Configuration, DefinitionsApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {ProductTypeDefinitionsApiError} from './error'

export const RATE_LIMITS = [
  {
    urlRegex: new RegExp('^/definitions/2020-09-01/productTypes$'),
    rate: 5,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/definitions/2020-09-01/productTypes/[^/]*$'),
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

export class ProductTypeDefinitionsApiClient extends DefinitionsApi {
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
      throw new ProductTypeDefinitionsApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

