import {createRemoteComponent} from '@remote-ui/core';
import type {PaymentIconProps as BasePaymentIconProps} from '@shopify/ui-api-design/dist/components/PaymentIcon';

export interface PaymentIconProps
  extends Pick<BasePaymentIconProps, 'id' | 'type' | 'accessibilityLabel'> {}

export const PaymentIcon = createRemoteComponent<
  'PaymentIcon',
  PaymentIconProps
>('PaymentIcon');
