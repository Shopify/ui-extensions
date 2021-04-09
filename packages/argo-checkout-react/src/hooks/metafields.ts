import type {RenderExtensionPoint} from '@shopify/argo-checkout';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current array of `metafields` applied to the checkout.
 */
export function useMetafields<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useSubscription(useExtensionApi<ID>().metafields);
}

/**
 * Returns a function to mutate the `metafields` property of the checkout.
 */
export function useApplyMetafieldsChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useExtensionApi<ID>().applyMetafieldChange;
}
