import {createRemoteComponent} from '@remote-ui/core';

export interface CardSectionProps {
  title?: string;
}

export const CardSection = createRemoteComponent<
  'CardSection',
  CardSectionProps
>('CardSection');
