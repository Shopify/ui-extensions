export interface TokenPayload {
  accessToken: string;
  scope: string;
  expiresIn?: number | null;
}

export interface ApiToken {
  /** Get a fresh api token. */
  getApiToken: () => Promise<TokenPayload | undefined>;
}

/**
 * Get a fresh api token for communication with Shopify Admin API
 */
export interface ApiTokenApi {
  apiToken: ApiToken;
}

export function isApiTokenApi(api: any): api is ApiTokenApi {
  return 'apiToken' in api;
}
