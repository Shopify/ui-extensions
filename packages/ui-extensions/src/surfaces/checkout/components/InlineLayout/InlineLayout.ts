import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {
  BorderProps,
  Columns,
  CornerProps,
  SizingProps,
  SpacingProps,
} from '../shared';
import type {GridProps} from '../Grid/Grid';

/**
 * @publicDocs
 */
export interface InlineLayoutProps
  extends Omit<GridProps, 'columns' | 'rows'>,
    BorderProps,
    CornerProps,
    SizingProps,
    SpacingProps {
  /**
   * The sizes for each column of the layout.
   *
   * - `auto`: The intrinsic size of the element.
   * - `fill`: Fills the remaining available space. When multiple elements use `fill`, the space is shared equally.
   * - `` `${number}%` ``: A percentage of the container's inline size.
   * - `` `${number}fr` ``: A fractional unit of the available space.
   * - `number`: A fixed size in pixels.
   *
   * When the sum of defined sizes exceeds the available space, elements shrink to avoid overflow. Elements without an explicit size fill the remaining space. A single value outside an array applies to all columns.
   *
   * @defaultValue 'fill'
   */
  columns?: MaybeResponsiveConditionalStyle<Columns>;
}

/**
 * InlineLayout arranges content over multiple columns. By default, all
 * columns are equal-sized and fill the available inline space. Content
 * does not wrap to new rows; extra children are added as new columns.
 */
export const InlineLayout = createRemoteComponent<
  'InlineLayout',
  InlineLayoutProps
>('InlineLayout');
