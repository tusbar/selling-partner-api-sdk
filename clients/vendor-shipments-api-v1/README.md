# `vendor-shipments-api-v1`

The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.

## Installing

```sh
yarn add @sp-api-sdk/vendor-shipments-api-v1
```

```sh
npm install @sp-api-sdk/vendor-shipments-api-v1
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {VendorShipmentsApiClient} from '@sp-api-sdk/vendor-shipments-api-v1'

const auth = new SellingPartnerApiAuth({
  clientId: '',
  clientSecret: '',
  refreshToken: '',
  secretAccessKey: '',
  accessKeyId: '',
  region: '',
  role: {
    arn: '',
  }
})

const client = new VendorShipmentsApiClient({
  auth,
  region: 'eu' // or 'eu-west-1'
})
```

## Handle Rate Limiting

If you want to let the SDK retry after each 429 responses, instanciate the client like this:

```javascript
const client = new VendorShipmentsApiClient({
  auth,
  region: 'eu',
  rateLimiting: {
    retry: true,
    onRetry: (retryInfo) => console.log(retryInfo) // Optional
  }
})
```

The SDK gets the rate limits for each routes from the API documentation

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-shipments-api/vendorShipments.md)
