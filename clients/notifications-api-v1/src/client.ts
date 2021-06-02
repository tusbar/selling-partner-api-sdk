import {Configuration, NotificationsApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {NotificationsApiError} from './error'

export class NotificationsApiClient extends NotificationsApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()
		const environment = parameters.sandbox ? 'sandbox' : 'production'

		const endpoint: string | undefined = endpoints[environment][parameters.region]

		if (!endpoint) {
			throw new NotificationsApiError(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}
