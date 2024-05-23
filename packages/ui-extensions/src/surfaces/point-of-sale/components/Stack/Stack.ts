import {createRemoteComponent} from '@remote-ui/core';
import type {HorizontalSpacing, VerticalSpacing} from '../Spacing/Spacing';

export type Spacing =
  | 0.5
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 13
  | 16;

export interface StackProps {
  /**
   * The direction of the stack.
   */
  direction: 'vertical' | 'horizontal';
  /**
   * The alignment of the children along the cross axis.
   * @defaultValue 'flex-end'
   */
  alignment?:
    | 'flex-end'
    | 'center'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  /**
   * The vertical padding around the stack.
   */
  paddingVertical?: VerticalSpacing;
  /**
   * The horizontal padding around the stack.
   */
  paddingHorizontal?: HorizontalSpacing;
  /**
   * The spacing between each child in the stack.
   * @defaultValue 1
   */
  spacing?: Spacing;
  /**
   * Whether the children should be stretched to fill the cross axis.
   */
  flexChildren?: boolean;
  /**
   * The flex value for the stack.
   */
  flex?: number;
  /**
   * Wrap behavior for the children of the stack.
   */
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export const Stack = createRemoteComponent<'Stack', StackProps>('Stack');
