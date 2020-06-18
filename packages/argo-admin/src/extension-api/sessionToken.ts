export interface SessionToken {
  getSessionToken: () => Promise<string | undefined>;
}

export interface SessionTokenApi {
  sessionToken: SessionToken;
}

export function isSessionTokenApi(api: any): api is SessionTokenApi {
  return 'sessionToken' in api;
}
