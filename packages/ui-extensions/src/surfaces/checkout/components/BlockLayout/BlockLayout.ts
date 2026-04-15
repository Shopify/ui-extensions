import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {Rows} from '../shared';
import type {GridProps} from '../Grid/Grid';

/** @publicDocs */
export interface BlockLayoutProps extends Omit<GridProps, 'columns' | 'rows'> {
  /**
   * The sizes for each row of the layout.
   *
   * - `auto`: The intrinsic size of the element.
   * - `fill`: Fills the remaining available space. When multiple elements use `fill`, the space is shared equally.
   * - `` `${number}%` ``: A percentage of the container's block size.
   * - `` `${number}fr` ``: A fractional unit of the available space.
   * - `number`: A fixed size in pixels.
   *
   * When the sum of defined sizes exceeds the available space, elements shrink to avoid overflow. Elements without an explicit size fill the remaining space. A single value outside an array applies to all rows.
   *
   * @defaultValue 'fill'
   */
  rows?: MaybeResponsiveConditionalStyle<Rows>;
}

/**
 * BlockLayout arranges content over multiple rows. By default, all rows
 * fill the available block space, sharing it equally.
 */
export const BlockLayout = createRemoteComponent<
  'BlockLayout',
  BlockLayoutProps
>('BlockLayout');
