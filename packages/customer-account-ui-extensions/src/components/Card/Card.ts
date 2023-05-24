import {createRemoteComponent} from '@remote-ui/core';
import {Background, SpacingProps} from 'components/shared';

export interface CardProps {
  /**
   * Adjust the background.
   */
  background?: Background;
  /**
   * The padding within the Card. Default is "loose"
   */
  padding?: SpacingProps;
}

export const Card = createRemoteComponent<'Card', CardProps>('Card');
