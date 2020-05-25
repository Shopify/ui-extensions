import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Card as BaseCard} from '@shopify/argo/components';

export type CardProps = ReactPropsFromRemoteComponentType<typeof BaseCard>;
export const Card = createRemoteReactComponent(BaseCard);
