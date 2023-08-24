import {CustomerAccountCard as BaseCustomerAccountCard} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type CustomerAccountCardProps = ReactPropsFromRemoteComponentType<
  typeof BaseCustomerAccountCard
>;

export const CustomerAccountCard = createRemoteReactComponent(
  BaseCustomerAccountCard,
);
