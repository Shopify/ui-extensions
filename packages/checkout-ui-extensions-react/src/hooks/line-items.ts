import type {
  RenderExtensionPoint,
  LineItem,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current line items for the checkout, and automatically re-renders
 * your component if line items are added, removed, or updated.
 */
export function useLineItems<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>(): LineItem[] {
  const {lineItems} = useExtensionApi<ID>();

  return useSubscription(lineItems);
}

export function useApplyLineItemsChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useExtensionApi<ID>().applyLineItemsChange;
}
