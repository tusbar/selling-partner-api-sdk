import {STSClient, STSClientConfig, AssumeRoleCommand, Credentials} from '@aws-sdk/client-sts'

import {SecurityTokenServiceError} from './error'

export * from './error'

interface Role {
  arn: string;
  sessionName: string;
}

export interface SecurityTokenServiceParameters {
  accessKeyId: string;
  secretAccessKey: string;
  role: Role;
  region?: string;
}

export class SecurityTokenService {
  public readonly accessKeyId: string
  public readonly secretAccessKey: string
  public readonly role: Role
  public readonly region?: string

  private _credentials?: Credentials

  constructor(parameters: SecurityTokenServiceParameters) {
    this.accessKeyId = parameters.accessKeyId
    this.secretAccessKey = parameters.secretAccessKey
    this.role = parameters.role
    this.region = parameters.region
  }

  /**
   * Get the AWS credentials from STS
   */
  async getCredentials() {
    if (
      !this._credentials ||
      (this._credentials?.Expiration && Date.now() >= this._credentials.Expiration.getTime())
    ) {
      this._credentials = await this.fetchCredentials()
    }

    return this._credentials
  }

  /**
   * Fetch new AWS credentials from STS
   */
  protected async fetchCredentials() {
    const config: STSClientConfig = {
      credentials: {
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey
      }
    }

    if (this.region) {
      config.region = this.region
    }

    const sts = new STSClient(config)

    const {Credentials: credentials} = await sts.send(
      new AssumeRoleCommand({
        RoleArn: this.role.arn,
        RoleSessionName: this.role.sessionName
      })
    )

    if (!credentials) {
      throw new SecurityTokenServiceError('AWS credentials are invalid')
    }

    return credentials
  }
}
