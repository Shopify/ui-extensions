import type {
  CartLine,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current line items for the checkout, and automatically re-renders
 * your component if line items are added, removed, or updated.
 */
export function useCartLines<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CartLine[] {
  const {lines} = useApi<Target>();

  return useSubscription(lines);
}
