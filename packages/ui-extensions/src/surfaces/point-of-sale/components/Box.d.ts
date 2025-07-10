/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
} from './shared.d.ts';

/**
 * Box is a generic container component for layout purposes.
 */
export interface BoxProps {
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

declare class Box extends PreactCustomElement implements BoxProps {
  accessor padding: BoxProps['padding'];
  accessor margin: BoxProps['margin'];
  accessor backgroundColor: BoxProps['backgroundColor'];
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

export interface BoxJSXProps extends Partial<BoxProps> {
  id?: string;
}

export {Box};
export type {BoxJSXProps};
