import type {PaymentIconProps as BasePaymentIconProps} from '@shopify/ui-api-design';

export interface PaymentIconProps extends BasePaymentIconProps {}

export interface PaymentIconElement
  extends PaymentIconProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-payment-icon': PaymentIconElement;
  }
}
