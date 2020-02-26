import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface CardSectionProps {
  title?: string;
}

export const CardSection = createRemoteComponent<'CardSection', CardSectionProps>('CardSection');
