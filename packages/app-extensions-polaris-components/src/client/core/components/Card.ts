import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface CardProps {
  title: string;
  sectioned?: boolean;
}

export const Card = createRemoteComponent<'Card', CardProps>('Card');
