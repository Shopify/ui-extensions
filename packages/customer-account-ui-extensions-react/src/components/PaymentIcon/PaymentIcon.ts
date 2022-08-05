import {PaymentIcon as BasePaymentIcon} from '@shopify/customer-account-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type PaymentIconProps = ReactPropsFromRemoteComponentType<
  typeof BasePaymentIcon
>;

export const PaymentIcon = createRemoteReactComponent(BasePaymentIcon);
