import type {
  CheckoutSettings,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the `checkoutSettings` applied to the checkout.
 */
export function useCheckoutSettings<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): CheckoutSettings {
  return useSubscription(useApi<Target>().checkoutSettings);
}
