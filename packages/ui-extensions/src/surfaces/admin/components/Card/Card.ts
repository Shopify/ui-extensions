import {createRemoteComponent} from '@remote-ui/core';
import {BackgroundProps} from '../shared';

export interface CardProps extends BackgroundProps {
  /**
   * Adjust the padding of all edges.
   *
   * `true` applies a default padding that is appropriate for the component.
   */
  padding?: boolean;
}

export const Card = createRemoteComponent<'Card', CardProps>('Card');
