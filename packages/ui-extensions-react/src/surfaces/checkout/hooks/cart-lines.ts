import type {
  CartLine,
  RenderExtensionPoint,
  CartLineChangeResult,
  CartLineChange,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current line items for the checkout, and automatically re-renders
 * your component if line items are added, removed, or updated.
 */
export function useCartLines<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): CartLine[] {
  const {lines} = useApi<ID>();

  return useSubscription(lines);
}

/**
 * Returns a function to mutate the `lines` property of checkout.
 */
export function useApplyCartLinesChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): (change: CartLineChange) => Promise<CartLineChangeResult> {
  const api = useApi<ID>();

  if ('applyCartLinesChange' in api) {
    return api.applyCartLinesChange;
  }

  throw new ExtensionHasNoMethodError(
    'applyCartLinesChange',
    api.extensionPoint,
  );
}
