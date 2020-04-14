import {useExtensionInput} from './utils';

export interface SessionToken {
  generate: () => Promise<string>;
}

export interface SessionTokenInput {
  sessionToken: SessionToken;
}

function isSessionTokenInput(
  input: ReturnType<typeof useExtensionInput>,
): input is SessionTokenInput {
  return 'sessionToken' in input;
}

export function useSessionToken() {
  const input = useExtensionInput();
  if (!isSessionTokenInput(input)) {
    throw new Error('No sessionToken input found');
  }
  return input.sessionToken;
}
