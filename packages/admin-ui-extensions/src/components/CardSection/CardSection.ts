import {createRemoteComponent} from '@remote-ui/core';

export interface CardSectionProps {
  title?: string;
}

/**
 * CardSections are used to group similar concepts within a Card. CardSections add dividers, which visually separate regions within cards.
 */
export const CardSection = createRemoteComponent<
  'CardSection',
  CardSectionProps
>('CardSection');
