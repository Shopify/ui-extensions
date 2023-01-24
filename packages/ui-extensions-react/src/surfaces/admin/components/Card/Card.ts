import {Card as BaseCard} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const Card = createRemoteReactComponent(BaseCard);
export type CardProps = ReactPropsFromRemoteComponentType<typeof BaseCard>;
