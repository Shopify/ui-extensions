import type {
  RenderExtensionTarget,
  PaymentOption,
  SelectedPaymentOption,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns all available payment options.
 */
export function useAvailablePaymentOptions<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): PaymentOption[] {
  const api = useApi<Target>();

  if ('availablePaymentOptions' in api) {
    return useSubscription(api.availablePaymentOptions);
  }

  throw new ExtensionHasNoMethodError(
    'availablePaymentOptions',
    api.extension.target,
  );
}

/**
 * Returns payment options selected by the buyer.
 */
export function useSelectedPaymentOptions<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): SelectedPaymentOption[] {
  const api = useApi<Target>();

  if ('selectedPaymentOptions' in api) {
    return useSubscription(api.selectedPaymentOptions);
  }

  throw new ExtensionHasNoMethodError(
    'selectedPaymentOptions',
    api.extension.target,
  );
}
