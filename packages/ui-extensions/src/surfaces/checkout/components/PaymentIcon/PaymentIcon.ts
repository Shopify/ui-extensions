import {createRemoteComponent} from '@remote-ui/core';
import type {PaymentIconProps as BasePaymentIconProps} from '@shopify/ui-api-design/dist/components/PaymentIcon';

export interface PaymentIconProps extends BasePaymentIconProps {}

export const PaymentIcon = createRemoteComponent<
  'PaymentIcon',
  PaymentIconProps
>('PaymentIcon');

export interface PaymentIconElement
  extends PaymentIconProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-payment-icon': PaymentIconElement;
  }
}
