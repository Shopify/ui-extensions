import {PaymentIcon as BasePaymentIcon} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type PaymentIconProps = ReactPropsFromRemoteComponentType<
  typeof BasePaymentIcon
>;

export const PaymentIcon = createRemoteReactComponent(BasePaymentIcon);
