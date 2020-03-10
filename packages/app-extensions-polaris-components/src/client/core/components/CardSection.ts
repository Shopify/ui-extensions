import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface CardSectionProps {
  title?: string;
  children?: React.ReactNode;
}

export const CardSection = createRemoteComponent<'CardSection', CardSectionProps>('CardSection');
