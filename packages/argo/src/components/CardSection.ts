import {createRemoteComponent} from '../utilities';

export interface CardSectionProps {
  title?: string;
  children?: React.ReactNode;
}

export const CardSection = createRemoteComponent<'CardSection', CardSectionProps>('CardSection');
