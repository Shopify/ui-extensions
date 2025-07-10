/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
} from './shared.d.ts';

/**
 * A row component used within POSBlock to organize content.
 */
export interface POSBlockRowProps {
  // POSBlockRow doesn't have any specific props based on the examples
}

declare class POSBlockRow
  extends PreactCustomElement
  implements POSBlockRowProps
{
  constructor();
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

export interface POSBlockRowJSXProps {
  id?: string;
}

export {POSBlockRow};
export type {POSBlockRowJSXProps};
