import {isSessionTokenInput} from '@shopify/argo';

import {useExtensionInput} from './utils';

export function useSessionToken() {
  const input = useExtensionInput();
  if (!isSessionTokenInput(input)) {
    throw new Error('No sessionToken input found');
  }
  return input.sessionToken;
}
