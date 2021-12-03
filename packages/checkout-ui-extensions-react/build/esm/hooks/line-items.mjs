import { useExtensionApi } from './api';
import { useSubscription } from './subscription';
/**
 * Returns the current line items for the checkout, and automatically re-renders
 * your component if line items are added, removed, or updated.
 */

export function useLineItems() {
  var _useExtensionApi = useExtensionApi(),
      lineItems = _useExtensionApi.lineItems;

  return useSubscription(lineItems);
}
export function useApplyLineItemsChange() {
  return useExtensionApi().applyLineItemsChange;
}