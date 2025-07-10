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
 * A component that renders a QR code.
 */
export interface QRCodeProps extends GlobalProps {
  /**
   * The content to encode in the QR code.
   */
  content: string;
  /**
   * The size of the QR code in pixels.
   */
  size?: number;
}

declare const QRCode_base: (abstract new (args_0: any) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class QRCode extends QRCode_base implements QRCodeProps {
  accessor content: QRCodeProps['content'];
  accessor size: QRCodeProps['size'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: QRCode;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: QRCodeJSXProps & PreactBaseElementPropsWithChildren<QRCode>;
    }
  }
}

declare const tagName = 's-qr-code';

export interface QRCodeJSXProps extends Partial<Omit<QRCodeProps, 'content'>> {
  // content is required
  content: string;
}

export {QRCode};
export type {QRCodeJSXProps};
