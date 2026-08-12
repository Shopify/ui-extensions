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
import type {
  BorderRadiusKeyword,
  ImageProps,
  Key,
  MaybeAllValuesShorthandProperty,
  Ref,
} from './components-shared.d.ts';

/** @publicDocs */
export type ComponentChildren = any;
/**
 * The base props for elements without children, providing key, ref, and slot properties.
 * @publicDocs
 */
export interface BaseElementProps<TClass = HTMLElement> {
  /**
   * A unique identifier for the element in lists. Used by Preact for efficient rendering and reconciliation.
   */
  key?: Key;
  /**
   * A reference to the underlying DOM element. Commonly used to access the element directly for imperative operations.
   */
  ref?: Ref<TClass>;
  /**
   * The named [slot](/docs/api/polaris/using-polaris-web-components#slots) this element should be placed in when used within a web component.
   */
  slot?: Lowercase<string>;
}
/**
 * The base props for elements with children, extending `BaseElementProps` with children support.
 * @publicDocs
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
/** @publicDocs */
export type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T & HTMLElement>;

declare const tagName = 's-image';
/** @publicDocs */
export interface ImageJSXProps extends Pick<ImageProps, 'id' | 'objectFit'> {
  /**
   * The border radius for the image corners.
   *
   * Supports one to four flow-relative values in this order:
   *
   * - One value applies to all corners.
   * - Two values apply to `start-start` and `end-end`, then `inline-end` and `inline-start`.
   * - Three values apply to `start-start`, both inline corners, and `end-end`.
   * - Four values apply to `start-start`, `inline-end`, `end-end`, and `inline-start`.
   *
   * Use values from `small-500` through `large-500`, `base`, `max`, or `none`.
   *
   * @default 'none'
   */
  borderRadius?: MaybeAllValuesShorthandProperty<BorderRadiusKeyword>;
  /**
   * Controls the displayed width of the image. Choose based on your layout requirements. For mobile interfaces, consider using `'fill'` with defined container dimensions to ensure consistent image display, as dynamic container heights can cause layout inconsistencies in scrollable views.
   *
   * - `'auto'` - Displays the image at its natural size. The image will not render until it has loaded, and the aspect ratio will be ignored. Use for images where maintaining original dimensions is important.
   * - `'fill'` - Makes the image take up 100% of the available inline size. The aspect ratio will be respected and the image will take the necessary space. Use for responsive layouts and flexible image containers.
   *
   * @default 'fill'
   */
  inlineSize?: ImageProps['inlineSize'];
  /**
   * The image source URL (remote URL or local file resource). When loading or no src is provided, a placeholder is rendered. Ensure URLs are properly formatted and properly formatted.
   */
  src?: ImageProps['src'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ImageJSXProps & HTMLElement;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<ImageJSXProps>;
    }
  }
}

export {tagName};
export type {ImageJSXProps};
