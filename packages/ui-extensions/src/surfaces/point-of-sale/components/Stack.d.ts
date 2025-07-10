/** VERSION: 0.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
  GlobalProps,
} from './shared';

export type SpacingType =
  | 'None'
  | 'ExtraTight'
  | 'Tight'
  | 'Small'
  | 'Base'
  | 'Large'
  | 'ExtraLarge'
  | 'HalfPoint'
  | 'OneAndHalfPoint';

export type StackDirection = 'vertical' | 'horizontal';
export type AlignmentType = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type FlexWrapType = 'wrap' | 'nowrap' | 'wrap-reverse';

/**
 * Stack is a layout component that makes it easy to stack elements together and apply a space between them.
 */
export interface StackProps extends GlobalProps {
  /**
   * The direction to stack the components.
   */
  direction?: StackDirection;
  /**
   * The vertical padding around the stack.
   */
  paddingVertical?: SpacingType;
  /**
   * The horizontal padding around the stack.
   */
  paddingHorizontal?: SpacingType;
  /**
   * The spacing between children.
   */
  spacing?: SpacingType;
  /**
   * The alignment of the children along the cross axis.
   */
  alignment?: AlignmentType;
  /**
   * Whether the children should be allowed to wrap.
   */
  flexWrap?: FlexWrapType;
  /**
   * Whether children should flex to fill available space.
   */
  flexChildren?: boolean;
  /**
   * The flex value for this stack.
   */
  flex?: number;
}

declare const Stack_base: (abstract new (args_0: any) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Stack extends Stack_base implements StackProps {
  accessor direction: StackProps['direction'];
  accessor paddingVertical: StackProps['paddingVertical'];
  accessor paddingHorizontal: StackProps['paddingHorizontal'];
  accessor spacing: StackProps['spacing'];
  accessor alignment: StackProps['alignment'];
  accessor flexWrap: StackProps['flexWrap'];
  accessor flexChildren: StackProps['flexChildren'];
  accessor flex: StackProps['flex'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Stack;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: StackJSXProps & PreactBaseElementPropsWithChildren<Stack>;
    }
  }
}

declare const tagName = 's-stack';

export interface StackJSXProps extends Partial<StackProps> {}

export {Stack};
export type {StackJSXProps};
