import type {RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current array of `privateMetafields` applied to the checkout.
 */
export function usePrivateMetafields<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useSubscription(useExtensionApi<ID>().privateMetafields);
}

/**
 * Returns a function to mutate the `privateMetafields` property of the checkout.
 */
export function useApplyPrivateMetafieldsChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useExtensionApi<ID>().applyPrivateMetafieldChange;
}
