import {createRemoteComponent} from '@remote-ui/core';
import {Background, SpacingProps} from 'components/shared';

export interface CardProps {
  /**
   * Adjust the background.
   */
  background?: Background;
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
  padding?: SpacingProps;
}

export const Card = createRemoteComponent<'Card', CardProps>('Card');
