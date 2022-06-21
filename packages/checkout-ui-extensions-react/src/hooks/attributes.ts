import type {
  RenderExtensionPoint,
  StandardApi,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `attributes` applied to the checkout.
 */
export function useAttributes<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useSubscription(useExtensionApi<ID>().attributes);
}

/**
 * Returns a function to mutate the `attributes` property of the checkout.
 */
export function useApplyAttributeChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>(): StandardApi<ID>['applyAttributeChange'] {
  return useExtensionApi<ID>().applyAttributeChange;
}
