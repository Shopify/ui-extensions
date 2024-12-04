import {Card as BaseCard} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';
import {CustomElement} from '../types';

export type CardProps = ReactPropsFromRemoteComponentType<typeof BaseCard>;

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['shopify-card']: CustomElement<CardProps>;
    }
  }
}

export const Card = createRemoteReactComponent(BaseCard);
