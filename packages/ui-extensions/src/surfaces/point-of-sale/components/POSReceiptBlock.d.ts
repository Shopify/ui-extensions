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
 * A block component for receipt extensions.
 */
export interface POSReceiptBlockProps {
  // POSReceiptBlock doesn't have any specific props based on documentation
}

declare class POSReceiptBlock
  extends PreactCustomElement
  implements POSReceiptBlockProps
{
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: POSReceiptBlock;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: POSReceiptBlockJSXProps &
        PreactBaseElementPropsWithChildren<POSReceiptBlock>;
    }
  }
}

declare const tagName = 's-pos-receipt-block';

export interface POSReceiptBlockJSXProps {
  id?: string;
}

export {POSReceiptBlock};
export type {POSReceiptBlockJSXProps};
