import {createRemoteComponent} from '@remote-ui/core';

import type {ViewLikeAccessibilityRole} from '../shared';

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
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help buyers
   * navigate the page.
   *
   *
   * Examples:
   *
   * - In an HTML host a `["listItem", "separator"]` tuple will render: `<li role="separator">`
   *
   * - In an HTML host a `"listItem"` string will render: `<li>`
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
