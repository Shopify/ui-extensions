/** VERSION: undefined **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {Key, Ref} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}

declare const tagName = 's-qr-code';
export interface QrCodeJSXProps {
  /**
   * The value to encode in the QR code
   */
  content: string;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: QrCodeJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: QrCodeJSXProps & BaseElementProps<QrCodeJSXProps>;
    }
  }
}

export {tagName};
export type {QrCodeJSXProps};
