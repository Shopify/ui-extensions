import type {
  Money,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns a `Money` value representing the minimum a buyer can expect to pay at the current
 * step of checkout. This value excludes amounts yet to be negotiated. For example,
 * the information step might not have delivery costs calculated.
 */
export function useTotalAmount<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Money {
  return useSubscription(useExtensionApi<ID>().cost.totalAmount);
}
