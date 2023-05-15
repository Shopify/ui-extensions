import type {
  RenderExtensionPoint,
  PaymentOption,
} from '@shopify/checkout-ui-extensions';
import {useMemo} from 'react';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';
/**
 * Returns the current payment options available
 */
export function useAvailablePaymentOptions<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): PaymentOption[] {
  const {availablePaymentOptions} = useExtensionApi<ID>();

  return useSubscription(availablePaymentOptions);
}

/**
 * Returns the selected payment options, and automatically re-renders
 * your component if the selected payment options change.
 */
export function useSelectedPaymentOptions<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): PaymentOption[] {
  const selectedPaymentOptions = useSubscription(
    useExtensionApi<ID>().selectedPaymentOptions,
  );
  const availablePaymentOptions = useSubscription(
    useExtensionApi<ID>().availablePaymentOptions,
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
