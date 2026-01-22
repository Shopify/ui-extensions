/** VERSION: 1.38.0 **/
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

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
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

export interface ThumbnailProps
  extends Required<Pick<ThumbnailProps$1, 'src' | 'alt' | 'size'>> {
  size: Extract<
    ThumbnailProps$1['size'],
    'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare class Thumbnail extends PolarisCustomElement implements ThumbnailProps {
  accessor src: ThumbnailProps['src'];
  accessor alt: ThumbnailProps['alt'];
  accessor size: ThumbnailProps['size'];
  accessor onload: CallbackEventListener<typeof tagName> | null;
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
export interface ThumbnailJSXProps
  extends Partial<ThumbnailProps>,
    Pick<ThumbnailProps$1, 'id'> {
  onLoad?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onError?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Thumbnail};
export type {ThumbnailJSXProps};
