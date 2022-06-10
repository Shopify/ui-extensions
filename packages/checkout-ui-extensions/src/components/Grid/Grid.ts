import {createRemoteComponent} from '@remote-ui/core';

import {
  ViewLikeAccessibilityRole,
  Spacing,
  InlineAlignment,
  BlockAlignment,
} from '../shared';

/* eslint-disable eslint-comments/no-unlimited-disable */
// eslint-disable-next-line
export type GridItemSize = 'auto' | 'fill' | number | `${number}fr` | `${number}%`;
/* eslint-enable eslint-comments/no-unlimited-disable */
type Columns = GridItemSize[] | GridItemSize;
type Rows = GridItemSize[] | GridItemSize;
export interface GridProps {
  /**
   * Sizes for each column of the layout.
   *
   *
   * `auto`: intrinsic size of the content.
   *
   * `fill`: fills the remaining available space. When multiple columns are set to `fill`, the remaining space is shared equally.
   *
   * `` `${number}%` ``: size in percentages.
   *
   * `` `${number}fr` ``: size in fractions.
   *
   * `number`: size in pixels.
   *
   *
   * - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.
   *
   * - When only one size is set and outside of an array, the grid will have one column of that size.
   *
   * @defaultValue 'fill'
   */
  columns?: Columns;
  /**
   * Sizes for each row of the layout.
   *
   *
   * `auto`: intrinsic size of the content.
   *
   * `fill`: fills the remaining available space. When multiple rows are set to `fill`, the remaining space is shared equally.
   *
   * `` `${number}%` ``: size in percentage.
   *
   * `` `${number}fr` ``: size in fraction.
   *
   * `number`: size in pixels.
   *
   *
   * - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.
   *
   * - When only one size is set and outside of an array, the grid will have one row of that size.
   *
   * @defaultValue 'fill'
   */
  rows?: Rows;
  /**
   * Adjust spacing between children
   *
   * @defaultValue 'none'
   **/
  spacing?: Spacing;
  /**
   * Position children along the cross axis
   */
  blockAlignment?: BlockAlignment;
  /**
   * Position children along the main axis
   */
  inlineAlignment?: InlineAlignment;
  /**
   * Sets the semantic meaning of the component’s content. When provided,
   * the role will be used by assistive technologies to help buyers
   * navigate the page.
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
  /**
   * A label that describes the purpose or contents of the element. When provided,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
}

/**
 * Grid is used to lay out content in a matrix of rows and columns.
 */
export const Grid = createRemoteComponent<'Grid', GridProps>('Grid');
