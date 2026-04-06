import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {
  BackgroundProps,
  BorderProps,
  CornerProps,
  IdProps,
  SizingProps,
  SpacingProps,
  ViewLikeAccessibilityRole,
} from '../shared';

/**
 * @publicDocs
 */
export interface GridItemProps
  extends Pick<BackgroundProps, 'background'>,
    BorderProps,
    CornerProps,
    IdProps,
    SizingProps,
    SpacingProps {
  /**
   * The number of columns this item spans within the grid.
   */
  columnSpan?: MaybeResponsiveConditionalStyle<number>;
  /**
   * The number of rows this item spans within the grid.
   */
  rowSpan?: MaybeResponsiveConditionalStyle<number>;
  /**
   * The semantic meaning of the component's content. When set, assistive technologies use this role to help users navigate the page. Accepts a single role or a tuple of two roles (for example, `['listItem', 'separator']`).
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
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

export const GridItem = createRemoteComponent<'GridItem', GridItemProps>(
  'GridItem',
);
