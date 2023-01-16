import {createRemoteComponent} from '@remote-ui/core';

export type CardSpacing =
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose'
  | 'none';

export interface CardProps {
  /**
   * Enables or disables a divider after each section. **Enabled by default**
   */
  includeDividers?: boolean;
  /**
   * The children that will be rendered inside the Card
   */
  fillHeight?: boolean;
  /**
   * The padding within the Card. Default is "loose"
   */
  padding?: CardSpacing;
}

export const Card = createRemoteComponent<'Card', CardProps>('Card');
