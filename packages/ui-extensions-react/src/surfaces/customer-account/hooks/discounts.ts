import type {
  CartDiscountAllocation,
  CartDiscountCode,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current discount codes applied to the cart, and automatically re-renders
 * your component if discount codes are added or removed.
 */
export function useDiscountCodes<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CartDiscountCode[] {
  const {discountCodes} = useApi<Target>();

  return useSubscription(discountCodes);
}

/**
 * Returns the current discount allocations applied to the cart, and automatically re-renders
 * your component if discount allocations changed.
 */
export function useDiscountAllocations<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CartDiscountAllocation[] {
  const {discountAllocations} = useApi<Target>();

  return useSubscription(discountAllocations);
}
