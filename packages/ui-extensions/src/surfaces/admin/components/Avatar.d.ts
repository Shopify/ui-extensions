/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  AvatarProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface AvatarProps
  extends Required<Pick<AvatarProps$1, 'initials' | 'src' | 'alt' | 'size'>> {
  size: Extract<
    AvatarProps$1['size'],
    'small-200' | 'small' | 'base' | 'large' | 'large-200'
  >;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

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

declare class Avatar extends PolarisCustomElement implements AvatarProps {
  accessor initials: AvatarProps['initials'];
  accessor src: AvatarProps['src'];
  accessor size: AvatarProps['size'];
  accessor alt: AvatarProps['alt'];
  accessor onload: CallbackEventListener<typeof tagName> | null;
  accessor onerror: OnErrorEventHandler;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Avatar;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: AvatarJSXProps & PreactBaseElementProps<Avatar>;
    }
  }
}

declare const tagName = 's-avatar';
export interface AvatarJSXProps
  extends Partial<AvatarProps>,
    Pick<AvatarProps$1, 'id'> {
  onLoad?: () => void;
  onError?: () => void;
}

export {Avatar};
export type {AvatarJSXProps};
