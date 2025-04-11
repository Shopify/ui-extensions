import {useMemo} from 'preact/hooks';

import type {ShippingOption} from '../api/standard/standard';
import type {ShippingOptionItemRenderMode} from '../api/shipping/shipping-option-item';

import {useApi} from './api';
import {ExtensionHasNoTargetError} from './errors';
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
  renderMode: ShippingOptionItemRenderMode;
} {
  const api = useApi<
    | 'purchase.checkout.shipping-option-item.render-after'
    | 'purchase.checkout.shipping-option-item.details.render'
  >();
  if (!api.target || api.isTargetSelected === undefined) {
    throw new ExtensionHasNoTargetError(
      'useShippingOptionTarget',
      api.extension.target,
    );
  }

  const shippingOptionTarget = useSubscription(api.target);
  const isTargetSelected = useSubscription(api.isTargetSelected);
  const renderMode = api.renderMode;

  const shippingOption = useMemo(() => {
    return {
      shippingOptionTarget,
      isTargetSelected,
      renderMode,
    };
  }, [shippingOptionTarget, isTargetSelected, renderMode]);

  return shippingOption;
}
