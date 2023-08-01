import {CustomerAccountCard as BaseCustomerAccountCard} from '@shopify/customer-account-ui-extensions';
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
