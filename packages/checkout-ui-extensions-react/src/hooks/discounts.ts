import type {
  CartDiscountAllocation,
  CartDiscountCode,
  RenderExtensionPoint,
  DiscountCodeChange,
  DiscountCodeChangeResult,
} from '@shopify/checkout-ui-extensions';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current discount codes applied to the cart, and automatically re-renders
 * your component if discount codes are added or removed.
 */
export function useDiscountCodes<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): CartDiscountCode[] {
  const {discountCodes} = useApi<ID>();

  return useSubscription(discountCodes);
}

/**
 * Returns the current discount allocations applied to the cart, and automatically re-renders
 * your component if discount allocations changed.
 */
export function useDiscountAllocations<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): CartDiscountAllocation[] {
  const {discountAllocations} = useApi<ID>();

  return useSubscription(discountAllocations);
}

/**
 * Returns a function to add or remove discount codes.
 *
 * > Caution:
 * > See [security considerations](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#network-access) if your extension retrieves discount codes through a network call.
 */
export function useApplyDiscountCodeChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): (change: DiscountCodeChange) => Promise<DiscountCodeChangeResult> {
  const api = useApi<ID>();

  if ('applyDiscountCodeChange' in api) {
    return api.applyDiscountCodeChange;
  }

  throw new ExtensionHasNoMethodError(
    'applyDiscountCodeChange',
    api.extensionPoint,
  );
}
