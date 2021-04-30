import type {RenderExtensionPoint} from '@shopify/argo-checkout';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `billingAddress` applied to the checkout.
 */
export function useBillingAddress<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useSubscription(useExtensionApi<ID>().billingAddress);
}
