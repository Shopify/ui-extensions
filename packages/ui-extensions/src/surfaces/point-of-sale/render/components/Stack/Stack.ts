import {createRemoteComponent} from '@remote-ui/core';
import type {PaddingProps, SizingProps} from '../shared/box';
import {
  ContentDistribution,
  ContentPosition,
  SpacingKeyword,
  GapProps,
} from '../shared/inner-layouts';
import {
  HorizontalSpacing,
  Spacing,
  VerticalSpacing,
} from '../shared/deprecated-types';

/**
 *
 * @deprecated Use the `block` or `inline` as a value instead.
 */
type DeprecatedStackDirection = 'vertical' | 'horizontal';

export interface StackProps extends PaddingProps, SizingProps, GapProps {
  /**
   * Sets how the Stack's children are placed within the Stack.
   *
   * @default 'inline'
   */
  direction?: 'inline' | 'block' | DeprecatedStackDirection;

  /**
   * The alignment of the children along the main axis.
   *
   * @defaultValue 'flex-start'
   * @deprecated Use the `justifyContent` prop instead.
   */
  alignment?: ContentPosition | ContentDistribution;

  /**
   * Aligns the Stack along the main axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   * @default 'start'
   */
  justifyContent?: ContentPosition | ContentDistribution;

  /**
   * Aligns the Stack's children along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   * @default 'start'
   */
  alignItems?: 'stretch' | ContentPosition;

  /**
   * Aligns the Stack along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   * @default 'start'
   */
  alignContent?: 'stretch' | ContentPosition | ContentDistribution;

  /**
   * The vertical padding around the stack.
   * @deprecated Use the `paddingBlock` prop instead.
   */
  paddingVertical?: VerticalSpacing;

  /**
   * The horizontal padding around the stack.
   * @deprecated Use the `paddingInline` prop instead.
   */
  paddingHorizontal?: HorizontalSpacing;

  /**
   * The spacing between each child in the stack.
   * @defaultValue 1
   * @deprecated Use the `gap` prop instead.
   */
  spacing?: Spacing;

  /**
   * The size of the gap between each child in the stack.
   * @defaultValue '0'
   */
  gap?: SpacingKeyword;

  /**
   * Whether the children should be stretched to fill the cross axis.
   * @deprecated Has no effect.
   */
  flexChildren?: boolean;

  /**
   * The flex value for the stack.
   * @deprecated All stacks use flex 1. Use `blockSize` and `inlineSize` to customize the size of your stack.
   */
  flex?: number;

  /**
   * Wrap behavior for the children of the stack.
   * @deprecated Has no effect, content will always wrap.
   */
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export const Stack = createRemoteComponent<'Stack', StackProps>('Stack');
