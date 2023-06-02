import {createRemoteComponent} from '@remote-ui/core';
import {Background, SpacingProps} from '../shared';

export interface CardProps extends SpacingProps {
  /**
   * Adjust the background.
   */
  background?: Background;
}

export const Card = createRemoteComponent<'Card', CardProps>('Card');
