import type {
  CartLine,
  RenderExtensionPoint,
  CartLineChangeResult,
  CartLineChange,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current line items for the checkout, and automatically re-renders
 * your component if line items are added, removed, or updated.
 */
export function useCartLines<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): CartLine[] {
  const {lines} = useExtensionApi<ID>();

  return useSubscription(lines);
}

/**
 * Returns a function to mutate the `lines` property of checkout.
 */
export function useApplyCartLinesChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): (change: CartLineChange) => Promise<CartLineChangeResult> {
  return useExtensionApi<ID>().applyCartLinesChange;
}
