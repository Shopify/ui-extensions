import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {
  BackgroundProps,
  BlockAlignment,
  BorderProps,
  Columns,
  CornerProps,
  IdProps,
  InlineAlignment,
  Rows,
  SizingProps,
  Spacing,
  SpacingProps,
  ViewLikeAccessibilityRole,
} from '../shared';

/**
 * @publicDocs
 */
export interface GridProps
  extends Pick<BackgroundProps, 'background'>,
    IdProps,
    BorderProps,
    CornerProps,
    SizingProps,
    SpacingProps {
  /**
   * The sizes for each column of the grid.
   *
   * - `auto`: The intrinsic size of the content.
   * - `fill`: Fills the remaining available space. When multiple columns use `fill`, the space is shared equally.
   * - `` `${number}%` ``: A percentage of the container's inline size.
   * - `` `${number}fr` ``: A fractional unit of the available space.
   * - `number`: A fixed size in pixels.
   *
   * When the sum of defined sizes exceeds the available space, elements shrink to avoid overflow (except inside a ScrollView). A single value outside an array creates one column of that size.
   *
   * @defaultValue 'fill'
   */
  columns?: MaybeResponsiveConditionalStyle<Columns>;
  /**
   * The sizes for each row of the grid.
   *
   * - `auto`: The intrinsic size of the content.
   * - `fill`: Fills the remaining available space. When multiple rows use `fill`, the space is shared equally.
   * - `` `${number}%` ``: A percentage of the container's block size.
   * - `` `${number}fr` ``: A fractional unit of the available space.
   * - `number`: A fixed size in pixels.
   *
   * When the sum of defined sizes exceeds the available space, elements shrink to avoid overflow. A single value outside an array creates one row of that size.
   *
   * @defaultValue 'fill'
   */
  rows?: MaybeResponsiveConditionalStyle<Rows>;
  /**
   * The spacing between child elements. A single value applies to both the row and column axes. A pair of values (for example, `['base', 'none']`) sets the row and column spacing independently.
   *
   * @defaultValue 'none'
   **/
  spacing?: MaybeResponsiveConditionalStyle<Spacing | [Spacing, Spacing]>;
  /**
   * The alignment of children along the block (cross) axis.
   */
  blockAlignment?: MaybeResponsiveConditionalStyle<BlockAlignment>;
  /**
   * The alignment of children along the inline (main) axis.
   */
  inlineAlignment?: MaybeResponsiveConditionalStyle<InlineAlignment>;
  /**
   * The semantic meaning of the component's content. When set, assistive technologies use this role to help users navigate the page. Accepts a single role or a tuple of two roles (for example, `['listItem', 'separator']`).
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
  /**
   * A label announced by assistive technologies that describes the purpose or contents of the element. Only set this when the element's visible content doesn't provide enough context on its own.
   */
  accessibilityLabel?: string;
  /**
   * The overflow behavior of the element.
   *
   * - `visible`: Content that extends beyond the container is visible.
   * - `hidden`: Content that extends beyond the container is clipped and not scrollable.
   *
   * @default 'visible'
   */
  overflow?: 'hidden' | 'visible';
  /**
   * The display mode of the component. Learn more about [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
   *
   * - `auto`: The initial value; the actual behavior depends on the component and context.
   * - `none`: Hides the component and removes it from the accessibility tree.
   *
   * @defaultValue 'auto'
   */
  display?: MaybeResponsiveConditionalStyle<'auto' | 'none'>;
}

export const Grid = createRemoteComponent<'Grid', GridProps>('Grid');
