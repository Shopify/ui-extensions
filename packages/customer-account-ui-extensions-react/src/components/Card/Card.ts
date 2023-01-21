import {Card as BaseCard} from '@shopify/customer-account-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type CardProps = ReactPropsFromRemoteComponentType<typeof BaseCard>;

export const Card = createRemoteReactComponent(BaseCard);
