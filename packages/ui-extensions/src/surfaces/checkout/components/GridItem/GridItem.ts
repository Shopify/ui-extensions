import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style';
import type {
  BorderProps,
  CornerProps,
  SizingProps,
  SpacingProps,
  ViewLikeAccessibilityRole,
} from '../shared';

export interface GridItemProps
  extends BorderProps,
    CornerProps,
    SizingProps,
    SpacingProps {
  /**
   * Number of columns the item will span across
   */
  columnSpan?: MaybeResponsiveConditionalStyle<number>;
  /**
   * Number of rows the item will span across
   */
  rowSpan?: MaybeResponsiveConditionalStyle<number>;
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help buyers
   * navigate the page.
   *
   *
   * For example:
   *
   * - In an HTML host a `['listItem', 'separator']` tuple will render: `<li role='separator'>`
   *
   * - In an HTML host a `listItem` string will render: `<li>`
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
  /**
   * A unique identifier for the component.
   */
  id?: string;
  /**
   * Sets the overflow behavior of the element.
   *
   * `hidden`: clips the content when it is larger than the element’s container.
   * The element will not be scrollable and the users will not be able
   * to access the clipped content by dragging or using a scroll wheel.
   *
   * `visible`: the content that extends beyond the element’s container is visible.
   *
   * @default 'visible'
   */
  overflow?: 'hidden' | 'visible';
}

/**
 * GridItem can be used as children of Grid.
 *
 * It offers a way to span the element across a number of columns and rows.
 */
export const GridItem = createRemoteComponent<'GridItem', GridItemProps>(
  'GridItem',
);
