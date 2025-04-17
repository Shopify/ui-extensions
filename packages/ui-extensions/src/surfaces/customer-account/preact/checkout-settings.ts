import type {RenderOrderStatusExtensionTarget} from '../extension-targets';
import type {CheckoutSettings} from '../api';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from './errors';

/**
 * Returns the `checkoutSettings` applied to the checkout.
 */
export function useCheckoutSettings<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): CheckoutSettings {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('checkoutSettings' in api)) {
    throw new ExtensionHasNoFieldError('checkoutSettings', extensionTarget);
  }

  return useSubscription(api.checkoutSettings);
}
