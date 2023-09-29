import {ShippingOption} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoTargetError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the shipping option the extension is attached to. This hook can only be used by extensions in the following
 * extension targets:
 * - `purchase.checkout.shipping-option-item.render-after`
 * - `purchase.checkout.shipping-option-item.details.render`
 */
export function useShippingOptionTarget(): {
  shippingOptionTarget: ShippingOption;
  isTargetSelected: boolean;
} {
  const api = useApi<
    | 'purchase.checkout.shipping-option-item.render-after'
    | 'purchase.checkout.shipping-option-item.details.render'
  >();
  if (!api.target || !api.isTargetSelected) {
    throw new ExtensionHasNoTargetError(
      'useShippingOptionTarget',
      api.extension.target,
    );
  }

  return {
    shippingOptionTarget: useSubscription(api.target),
    isTargetSelected: useSubscription(api.isTargetSelected),
  };
}
