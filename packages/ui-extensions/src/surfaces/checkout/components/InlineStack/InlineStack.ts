import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {
  BackgroundProps,
  BlockAlignment,
  BorderProps,
  CornerProps,
  IdProps,
  InlineAlignment,
  SizingProps,
  Spacing,
  SpacingProps,
  ViewLikeAccessibilityRole,
} from '../shared';

/**
 * @publicDocs
 */
export interface InlineStackProps
  extends Pick<BackgroundProps, 'background'>,
    BorderProps,
    CornerProps,
    IdProps,
    SizingProps,
    SpacingProps {
  /**
   * The semantic meaning of the component's content. When set, assistive technologies use this role to help users navigate the page. Accepts a single role or a tuple of two roles (for example, `['listItem', 'separator']`).
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
  /**
   * A label announced by assistive technologies that describes the purpose or contents of the element. Only set this when the element's visible content doesn't provide enough context on its own.
   */
  accessibilityLabel?: string;
  /**
   * The alignment of children along the block (cross) axis.
   *
   * @defaultValue 'start'
   */
  blockAlignment?: MaybeResponsiveConditionalStyle<BlockAlignment>;
  /**
   * The alignment of children along the inline (main) axis.
   *
   * @defaultValue 'start'
   */
  inlineAlignment?: MaybeResponsiveConditionalStyle<InlineAlignment>;
  /**
   * The spacing between child elements. A single value applies to both the row and column axes. A pair of values (for example, `['base', 'none']`) sets the row and column spacing independently.
   *
   * @defaultValue 'base'
   **/
  spacing?: MaybeResponsiveConditionalStyle<Spacing | [Spacing, Spacing]>;
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

export const InlineStack = createRemoteComponent<
  'InlineStack',
  InlineStackProps
>('InlineStack');
