import {createRemoteComponent} from '@remote-ui/core';

import {ViewLikeAccessibilityRole} from '../shared';

export interface GridItemProps {
  /**
   * Number of columns the item will span across
   */
  columnSpan?: number;
  /**
   * Number of rows the item will span across
   */
  rowSpan?: number;
  /**
   * Sets the semantic meaning of the component’s content. When provided,
   * the role will be used by assistive technologies to help buyers
   * navigate the page.
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
}

/**
 * GridItem can be used as children of Grid.
 *
 * It offers a way to span the element across a number of columns and rows.
 */
export const GridItem = createRemoteComponent<'GridItem', GridItemProps>(
  'GridItem',
);
