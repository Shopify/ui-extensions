import {createRemoteComponent} from '@remote-ui/core';

import {GridProps, GridSize} from '../Grid';

export interface BlockLayoutProps extends Omit<GridProps, 'columns' | 'rows'> {
  /**
   * Sizes for each row of the layout.
   *
   *
   * `auto`: intrinsic size of the element.
   *
   * `fill`: fills the remaining available space. When multiple elements are set to `fill`, the remaining space is shared equally.
   *
   * `Unit`: size in pixels `px`, percentages `%` or fractions `fr`.
   *
   *
   * - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.
   *
   * - When the size of an element is not explicitly set, it will fill the remaining space available.
   *
   * - When only one size is set, all elements of the layout will take that size.
   *
   *
   * @defaultValue 'fill'
   */
  rows?: GridSize | GridSize[];
}

/**
 * BlockLayout is used to lay out content over multiple rows.
 *
 * By default, all rows fill the available block space, sharing it equally.
 */
export const BlockLayout = createRemoteComponent<
  'BlockLayout',
  BlockLayoutProps
>('BlockLayout');
