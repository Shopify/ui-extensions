import {createRemoteComponent} from '@remote-ui/core';

export interface PaymentIconProps {
  /**
   * The payment brand's icon to display.
   */
  paymentBrand: string;
  /**
   * Display the payment icon in a disabled state.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Display the payment icon in a larger size with a box shadow.
   *
   * @defaultValue false
   */
  active?: boolean;
}

export const PaymentIcon = createRemoteComponent<
  'PaymentIcon',
  PaymentIconProps
>('PaymentIcon');
