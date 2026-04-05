import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {
  BackgroundProps,
  BlockAlignment,
  BorderProps,
  InlineAlignment,
  SizingProps,
  SpacingProps,
  VisibilityProps,
  Display,
  ViewLikeAccessibilityRole,
  CornerProps,
  Opacity,
  IdProps,
} from '../shared';

export type PositionType = 'absolute' | 'relative' | 'sticky';
export type Coordinate = number | `${number}%`;

interface PositionBlockStart {
  /**
   * The block-start offset. Accepts a pixel value (`number`) or a percentage (`` `${number}%` ``) relative to the parent's block size.
   */
  blockStart?: Coordinate;
}

interface PositionInlineStart {
  /**
   * The inline-start offset. Accepts a pixel value (`number`) or a percentage (`` `${number}%` ``) relative to the parent's inline size.
   */
  inlineStart?: Coordinate;
}

interface PositionBlockEnd {
  /**
   * The block-end offset. Accepts a pixel value (`number`) or a percentage (`` `${number}%` ``) relative to the parent's block size.
   */
  blockEnd?: Coordinate;
}

interface PositionInlineEnd {
  /**
   * The inline-end offset. Accepts a pixel value (`number`) or a percentage (`` `${number}%` ``) relative to the parent's inline size.
   */
  inlineEnd?: Coordinate;
}

interface PositionTypeProperty {
  /**
   * The positioning scheme for the `View`.
   *
   * @defaultValue 'relative'
   */
  type?: PositionType;
}

interface PositionBlockStartInlineStart
  extends PositionBlockStart,
    PositionInlineStart,
    PositionTypeProperty {
  blockEnd?: undefined;
  inlineEnd?: undefined;
}

interface PositionBlockStartInlineEnd
  extends PositionBlockStart,
    PositionInlineEnd,
    PositionTypeProperty {
  blockEnd?: undefined;
  inlineStart?: undefined;
}

interface PositionBlockEndInlineStart
  extends PositionBlockEnd,
    PositionInlineStart,
    PositionTypeProperty {
  blockStart?: undefined;
  inlineEnd?: undefined;
}

interface PositionBlockEndInlineEnd
  extends PositionBlockEnd,
    PositionInlineEnd,
    PositionTypeProperty {
  blockStart?: undefined;
  inlineStart?: undefined;
}

export type Position =
  | PositionBlockStartInlineStart
  | PositionBlockStartInlineEnd
  | PositionBlockEndInlineStart
  | PositionBlockEndInlineEnd;

export interface Translate {
  /**
   * The translation along the block (cross) axis. A percentage value refers to the block size of the View.
   */
  block?: number | `${number}%`;
  /**
   * The translation along the inline (main) axis. A percentage value refers to the inline size of the View.
   */
  inline?: number | `${number}%`;
}

/**
 * @publicDocs
 */
export interface ViewProps
  extends Pick<BackgroundProps, 'background'>,
    BorderProps,
    CornerProps,
    IdProps,
    SizingProps,
    SpacingProps,
    VisibilityProps {
  /**
   * The display mode of the component. Learn more about [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
   *
   * @defaultValue 'auto'
   */
  display?: MaybeResponsiveConditionalStyle<Display>;
  /**
   * The opacity of the View, applied to the background and all children. Use carefully as reduced opacity can decrease contrast ratios, resulting in inaccessible text.
   */
  opacity?: Opacity;
  /**
   * A label announced by assistive technologies that describes the purpose or contents of the element. Only set this when the element's visible content doesn't provide enough context on its own.
   */
  accessibilityLabel?: string;
  /**
   * The semantic meaning of the component's content. When set, assistive technologies use this role to help users navigate the page. Accepts a single role or a tuple of two roles (for example, `['listItem', 'separator']`).
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
  /**
   * Changes how the `View` is positioned. When setting `position`, set each axis only once.
   *
   * ```
   * <View position={{blockStart, inlineEnd}} /> // Allowed; sets the `block` and `inline` axes once each
   * ```
   *
   * ```
   * <View position={{inlineStart, blockEnd}} /> // Allowed; sets the `inline` and `block` axes once each
   * ```
   *
   * ```
   * <View position={{blockStart, blockEnd}} /> // Not allowed; sets the `block` axis twice
   * ```
   *
   * ```
   * <View position={{inlineStart, inlineEnd}} /> // Not allowed; sets the `inline` axis twice
   * ```
   */
  position?: MaybeResponsiveConditionalStyle<Position>;
  /**
   * A two-dimensional translation of the View along the block and inline axes.
   */
  translate?: MaybeResponsiveConditionalStyle<Translate>;
  /**
   * The alignment of children along the block (cross) axis.
   */
  blockAlignment?: MaybeResponsiveConditionalStyle<
    Extract<BlockAlignment, 'start' | 'center' | 'end'>
  >;
  /**
   * The alignment of children along the inline (main) axis.
   */
  inlineAlignment?: MaybeResponsiveConditionalStyle<InlineAlignment>;
  /**
   * The inline size of the View.
   *
   * - `fill`: Takes all the available space.
   */
  inlineSize?: MaybeResponsiveConditionalStyle<'fill'>;
  /**
   * The overflow behavior of the element.
   *
   * - `visible`: Content that extends beyond the container is visible.
   * - `hidden`: Content that extends beyond the container is clipped and not scrollable.
   *
   * @default 'visible'
   */
  overflow?: 'hidden' | 'visible';
}

export const View = createRemoteComponent<'View', ViewProps>('View');
