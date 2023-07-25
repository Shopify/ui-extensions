import type {
  MailingAddress,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {ScopeNotGrantedError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `shippingAddress` applied to the checkout.
 */
export function useShippingAddress<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): MailingAddress | undefined {
  const shippingAddress = useApi<Target>().shippingAddress;

  if (!shippingAddress) {
    throw new ScopeNotGrantedError(
      'Using shipping address requires having shipping address permissions granted to your app.',
    );
  }

  return useSubscription(shippingAddress);
}
