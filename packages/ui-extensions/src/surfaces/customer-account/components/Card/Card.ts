import {createRemoteComponent} from '@remote-ui/core';

/**
 * Group related content and functionality together in a familiar and consistent style.
 * @publicDocs
 */
export interface CardProps {
  /**
   * Adjust the padding of all edges.
   *
   * `true` applies a default padding that is appropriate for the component.
   */
  padding?: boolean;
}

export const Card = createRemoteComponent<'Card', CardProps>('Card');
