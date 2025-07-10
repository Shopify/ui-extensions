/** VERSION: 0.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
  GlobalProps,
} from './shared';

/**
 * A row component used within POSBlock to organize content.
 */
export interface POSBlockRowProps extends GlobalProps {
  // POSBlockRow doesn't have any specific props based on the examples
}

declare class POSBlockRow
  extends PreactCustomElement
  implements POSBlockRowProps
{
  constructor();
  accessor id?: string;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: POSBlockRow;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: POSBlockRowJSXProps &
        PreactBaseElementPropsWithChildren<POSBlockRow>;
    }
  }
}

declare const tagName = 's-pos-block-row';

export interface POSBlockRowJSXProps extends GlobalProps {}

export {POSBlockRow};
export type {POSBlockRowJSXProps};
