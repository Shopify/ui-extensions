import type {
  MailingAddress,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {ScopeNotGrantedError} from '../errors';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `shippingAddress` applied to the checkout.
 */
export function useShippingAddress<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): MailingAddress | undefined {
  const shippingAddress = useExtensionApi<ID>().shippingAddress;

  if (!shippingAddress) {
    throw new ScopeNotGrantedError(
      'Using shipping address requires having shipping address permissions granted to your app.',
    );
  }

  return useSubscription(shippingAddress);
}
