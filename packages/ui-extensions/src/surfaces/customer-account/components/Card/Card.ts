import {createRemoteComponent} from '@remote-ui/core';

/**
 * @publicDocs
 */
export interface CardProps {
  /**
   * Whether to apply default padding to all edges of the card.
   *
   * - `true`: Applies context-appropriate padding.
   * - `false` (or omitted): No padding is applied.
   */
  padding?: boolean;
}

export const Card = createRemoteComponent<'Card', CardProps>('Card');
