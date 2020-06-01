export interface SessionTokenPayload {
  getSessionToken: () => Promise<string | undefined>;
}

export interface SessionTokenApi {
  sessionToken: SessionTokenPayload;
}

export function isSessionTokenApi(api: any): api is SessionTokenApi {
  return 'sessionToken' in api;
}
