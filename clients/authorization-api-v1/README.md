# `authorization-api-v1`

The Selling Partner API for Authorization helps developers manage authorizations and check the specific permissions associated with a given authorization.

## Installing

```sh
yarn add @sp-api-sdk/authorization-api-v1
```

```sh
npm install @sp-api-sdk/authorization-api-v1
```

## Getting Started

### With grantless API

```javascript
import {SellingPartnerApiAuth, AuthorizationScope} from '@sp-api-sdk/auth'
import {AuthorizationApiClient} from '@sp-api-sdk/authorization-api-v1'

const auth = new SellingPartnerApiAuth({
  clientId: '',
  clientSecret: '',
  scopes: [AuthorizationScope.MIGRATION],
  secretAccessKey: '',
  accessKeyId: '',
  region: '',
  role: {
    arn: '',
  }
})


const client = new NotificationsApiClient({
  auth,
  region: 'eu' // or 'eu-west-1'
})
```

### With access token

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {AuthorizationApiClient} from '@sp-api-sdk/authorization-api-v1'

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

const client = new AuthorizationApiClient({
  auth,
  region: 'eu' // or 'eu-west-1'
})
```

## Handle Rate Limiting

If you want to let the SDK retry after each 429 responses, instanciate the client like this:

```javascript
const client = new AuthorizationApiClient({
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

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/authorization-api/authorization.md)
