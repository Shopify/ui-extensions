import type {
  RenderExtensionTarget,
  PaymentOption,
} from '@shopify/ui-extensions/checkout';
import {useMemo} from 'react';

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
>(): PaymentOption[] {
  const api = useApi<Target>();

  console.log('using test version');

  if (
    !('selectedPaymentOptions' in api) ||
    !('availablePaymentOptions' in api)
  ) {
    throw new ExtensionHasNoMethodError(
      'selectedPaymentOptions',
      api.extension.target,
    );
  }

  const selectedPaymentOptions = useSubscription(api.selectedPaymentOptions);
  const availablePaymentOptions = useSubscription(api.availablePaymentOptions);

  return useMemo(() => {
    const availablePaymentOptionsMap: Record<string, PaymentOption> = {};

    for (const option of availablePaymentOptions) {
      availablePaymentOptionsMap[option.handle] = option;
    }

    return selectedPaymentOptions.map((paymentOption) => {
      return {
        handle: paymentOption.handle,
        type: paymentOption.type,
      };
    });
  }, [availablePaymentOptions, selectedPaymentOptions]);
}
