import type {
  Money,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns a `Money` value representing the minimum a buyer can expect to pay at the current
 * step of checkout. This value excludes amounts yet to be negotiated. For example,
 * the information step might not have delivery costs calculated.
 */
export function useTotalAmount<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Money {
  return useSubscription(useApi<Target>().cost.totalAmount);
}
