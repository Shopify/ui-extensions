import {
  PaymentMethodAttributesResult,
  PaymentMethodAttributesChange,
} from '@shopify/checkout-ui-extensions';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';

/**
 * Returns a function to set payment method attributes.
 */
export function useApplyPaymentMethodAttributesChange(): (
  change: PaymentMethodAttributesChange,
) => Promise<PaymentMethodAttributesResult> {
  const api = useApi<'Checkout::PaymentMethod::Render'>();
  if (!api.applyPaymentMethodAttributesChange) {
    throw new ExtensionHasNoMethodError(
      'useApplyPaymentMethodAttributesChange',
      api.extensionPoint,
    );
  }
  return api.applyPaymentMethodAttributesChange;
}
