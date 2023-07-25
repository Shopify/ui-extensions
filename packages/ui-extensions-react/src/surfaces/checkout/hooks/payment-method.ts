import {
  PaymentMethodAttributesResult,
  PaymentMethodAttributesChange,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';

/**
 * Returns a function to set payment method attributes.
 */
export function useApplyPaymentMethodAttributesChange(): (
  change: PaymentMethodAttributesChange,
) => Promise<PaymentMethodAttributesResult> {
  const api = useApi<'purchase.checkout.payment-option-item.details.render'>();

  if (!api.applyPaymentMethodAttributesChange) {
    throw new ExtensionHasNoMethodError(
      'useApplyPaymentMethodAttributesChange',
      api.extension.target,
    );
  }

  return api.applyPaymentMethodAttributesChange;
}
