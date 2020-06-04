import {createRemoteComponent} from '../utilities';

export interface CardSectionProps {
  title?: string;
}

export const CardSection = createRemoteComponent<'CardSection', CardSectionProps>('CardSection');
