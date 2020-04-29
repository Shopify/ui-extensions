export interface SessionToken {
  getSessionToken: () => Promise<string | undefined>;
}

export interface SessionTokenInput {
  sessionToken: SessionToken;
}

export function isSessionTokenInput(input: any): input is SessionTokenInput {
  return 'sessionToken' in input;
}
