import {createRemoteComponent} from '@remote-ui/core';

import {AccessibilityRole} from '../shared';

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
   * Set the semantic of the component’s content
   */
  accessibilityRole?:
    | AccessibilityRole
    | [AccessibilityRole, AccessibilityRole];
}

/**
 * GridItem can be used as children of Grid.
 *
 * It offers a way to span the element across a number of columns and rows.
 */
export const GridItem = createRemoteComponent<'GridItem', GridItemProps>(
  'GridItem',
);
