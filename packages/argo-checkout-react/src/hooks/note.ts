import type {RenderExtensionPoint} from '@shopify/argo-checkout';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `note` applied to the checkout.
 */
export function useNote<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useSubscription(useExtensionApi<ID>().note);
}
