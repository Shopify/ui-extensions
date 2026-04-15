/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ThumbnailProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}

/**
 * The properties for the thumbnail component. A thumbnail displays a small preview image with configurable sizing. Properties include `src` for the image URL, `alt` for accessibility text, and `size` for controlling the thumbnail dimensions.
 * @publicDocs
 */
export interface ThumbnailProps
  extends Required<Pick<ThumbnailProps$1, 'src' | 'alt' | 'size'>> {
  /**
   * The URL of the image to display in the thumbnail. You can provide an absolute or relative URL pointing to the image file.
   */
  src: ThumbnailProps$1['src'];
  /**
   * Alternative text that describes the image for screen readers. This text should convey the meaning or content of the image to users who can't see it.
   */
  alt: ThumbnailProps$1['alt'];
  /**
   * The size of the thumbnail. Choose from `'small-200'`, `'small-100'`, `'small'`, `'base'`, `'large'`, or `'large-100'` to control the thumbnail dimensions.
   *
   * @default 'base'
   */
  size: Extract<
    ThumbnailProps$1['size'],
    'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * A thumbnail displays a small preview image with configurable sizing.
 */
declare class Thumbnail extends PolarisCustomElement implements ThumbnailProps {
  /**
   * The URL of the image to display in the thumbnail.
   */
  accessor src: ThumbnailProps['src'];
  /**
   * Alternative text that describes the image for screen readers.
   */
  accessor alt: ThumbnailProps['alt'];
  /**
   * The size of the thumbnail.
   */
  accessor size: ThumbnailProps['size'];
  /**
   * A callback that's fired when the image has loaded successfully.
   */
  accessor onload: CallbackEventListener<typeof tagName> | null;
  /**
   * A callback that's fired when the image fails to load.
   */
  accessor onerror: OnErrorEventHandler;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Thumbnail;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ThumbnailJSXProps & PreactBaseElementProps<Thumbnail>;
    }
  }
}

declare const tagName = 's-thumbnail';
/**
 * The properties for the thumbnail component when it's used in JSX.
 * @publicDocs
 */
export interface ThumbnailJSXProps
  extends Partial<ThumbnailProps>,
    Pick<ThumbnailProps$1, 'id'> {
  /**
   * A callback that's fired when the image has loaded successfully.
   */
  onLoad?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's fired when the image fails to load.
   */
  onError?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Thumbnail};
export type {ThumbnailJSXProps};
