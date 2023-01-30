import type {RenderExtensionPoint} from '@shopify/ui-extensions/checkout';

import {ScopeNotGrantedError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `shippingAddress` applied to the checkout.
 */
export function useShippingAddress<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>() {
  const shippingAddress = useApi<ID>().shippingAddress;

  if (!shippingAddress) {
    throw new ScopeNotGrantedError(
      'Using shipping address requires having shipping address permissions granted to your app.',
    );
  }

  return useSubscription(shippingAddress);
}
