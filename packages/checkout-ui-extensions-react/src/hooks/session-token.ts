import {
  SessionToken,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';

/**
 * Returns a 'sessionToken' object, which contains a get() method that
 * can be used to obtain a checkout extension session token.
 */
export function useSessionToken<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): SessionToken {
  return useExtensionApi<ID>().sessionToken;
}
