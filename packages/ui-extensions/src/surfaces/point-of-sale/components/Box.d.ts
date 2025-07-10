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

/**
 * Box is a generic container component for layout purposes.
 */
export interface BoxProps extends GlobalProps {
  /**
   * The padding inside the box.
   */
  padding?: string;
  /**
   * The margin outside the box.
   */
  margin?: string;
  /**
   * The background color of the box.
   */
  backgroundColor?: string;
}

declare const Box_base: (abstract new (args_0: any) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Box extends Box_base implements BoxProps {
  accessor padding: BoxProps['padding'];
  accessor margin: BoxProps['margin'];
  accessor backgroundColor: BoxProps['backgroundColor'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Box;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BoxJSXProps & PreactBaseElementPropsWithChildren<Box>;
    }
  }
}

declare const tagName = 's-box';

export interface BoxJSXProps extends Partial<BoxProps> {}

export {Box};
export type {BoxJSXProps};
