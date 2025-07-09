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
 * The image component displays an image to a merchant in Shopify POS.
 */
export interface ImageProps {
  /**
   * The source URL or path of the image.
   */
  src: string;
  /**
   * Alternative text for the image.
   */
  alt?: string;
  /**
   * The width of the image.
   */
  width?: number;
  /**
   * The height of the image.
   */
  height?: number;
}

declare class Image extends PreactCustomElement implements ImageProps {
  accessor src: ImageProps['src'];
  accessor alt: ImageProps['alt'];
  accessor width: ImageProps['width'];
  accessor height: ImageProps['height'];
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Image;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ImageJSXProps & PreactBaseElementPropsWithChildren<Image>;
    }
  }
}

declare const tagName = 's-image';

export interface ImageJSXProps extends Partial<Omit<ImageProps, 'src'>> {
  // src is required
  src: string;
  id?: string;
}

export {Image};
export type {ImageJSXProps};
