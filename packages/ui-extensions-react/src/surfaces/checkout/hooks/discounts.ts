import type {
  CartDiscountAllocation,
  CartDiscountCode,
  StandardApi,
  RenderExtensionPoint,
} from '@shopify/ui-extensions/checkout';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current discount codes applied to the cart, and automatically re-renders
 * your component if discount codes are added or removed.
 */
export function useDiscountCodes<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): CartDiscountCode[] {
  const {discountCodes} = useExtensionApi<ID>();

  return useSubscription(discountCodes);
}

/**
 * Returns the current discount allocations applied to the cart, and automatically re-renders
 * your component if discount allocations changed.
 */
export function useDiscountAllocations<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): CartDiscountAllocation[] {
  const {discountAllocations} = useExtensionApi<ID>();

  return useSubscription(discountAllocations);
}

/**
 * Returns a function to add or remove discount codes.
 */
export function useApplyDiscountCodeChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): StandardApi<ID>['applyDiscountCodeChange'] {
  return useExtensionApi<ID>().applyDiscountCodeChange;
}
