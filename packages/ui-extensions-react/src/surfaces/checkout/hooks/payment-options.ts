import type {
  RenderExtensionTarget,
  PaymentOption,
} from '@shopify/ui-extensions/checkout';
import {useMemo} from 'react';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns all available payment options.
 */
export function useAvailablePaymentOptions<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): PaymentOption[] {
  const {availablePaymentOptions} = useApi<Target>();

  return useSubscription(availablePaymentOptions);
}

/**
 * Returns payment options selected by the buyer.
 */
export function useSelectedPaymentOptions<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): PaymentOption[] {
  const selectedPaymentOptions = useSubscription(
    useApi<Target>().selectedPaymentOptions,
  );
  const availablePaymentOptions = useSubscription(
    useApi<Target>().availablePaymentOptions,
  );

  return useMemo(() => {
    const availablePaymentOptionsMap: {[key: string]: PaymentOption} = {};

    for (const option of availablePaymentOptions) {
      availablePaymentOptionsMap[option.handle] = option;
    }

    return selectedPaymentOptions.map((paymentOption) => {
      return {
        handle: paymentOption.handle,
        type: availablePaymentOptionsMap[paymentOption.handle]?.type,
      };
    });
  }, [availablePaymentOptions, selectedPaymentOptions]);
}
