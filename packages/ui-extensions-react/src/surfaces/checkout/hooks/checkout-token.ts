import {
  CheckoutToken,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Provides access to checkout token.
 */
export function useCheckoutToken<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CheckoutToken | undefined {
  return useSubscription(useApi<Target>().checkoutToken);
}
