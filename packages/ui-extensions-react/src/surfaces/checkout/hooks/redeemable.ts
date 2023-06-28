import {
  RedeemableChangeResult,
  RedeemableChange,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useExtensionApi} from './api';

/**
 * Returns a function to apply a change to add a redeemable.
 */
export function useApplyRedeemableChange(): (
  change: RedeemableChange,
) => Promise<RedeemableChangeResult> {
  const api = useExtensionApi<'Checkout::GiftCard::Render'>();
  if (!api.applyRedeemableChange) {
    throw new ExtensionHasNoMethodError(
      'useApplyRedeemableChange',
      api.extensionPoint,
    );
  }
  return api.applyRedeemableChange;
}
