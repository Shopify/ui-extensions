import type {RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns either the proposed `shippingAddress`, if it is required, or
 * the proposed `billingAddress` applied to the checkout.
 */
export function usePrimaryAddress<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useSubscription(useExtensionApi<ID>().primaryAddress);
}
