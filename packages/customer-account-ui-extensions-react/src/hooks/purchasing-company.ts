import {useSubscription} from '@shopify/checkout-ui-extensions-react';
import {useApi} from './api';
import {
  RenderExtensionPoint,
  PurchasingCompany,
} from '@shopify/customer-account-ui-extensions';

/**
 * Provides information about the company that the business customer is purchasing on behalf of.
 * If the buyer is not a business customer, return value is `undefined`.
 */
export function usePurchasingCompany<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): PurchasingCompany | undefined {
  const buyerIdentity = useApi<ID>().buyerIdentity;
  return useSubscription(buyerIdentity.purchasingCompany);
}
