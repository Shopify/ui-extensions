/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  BannerProps$1,
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
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

export type RequiredBannerProps = Required<BannerProps$1>;
export interface BannerProps
  extends Pick<
    RequiredBannerProps,
    'heading' | 'dismissible' | 'hidden' | 'tone'
  > {
  tone: Extract<
    RequiredBannerProps['tone'],
    'auto' | 'critical' | 'warning' | 'success' | 'info'
  >;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare class Banner extends PolarisCustomElement implements BannerProps {
  accessor heading: BannerProps['heading'];
  accessor tone: BannerProps['tone'];
  accessor hidden: BannerProps['hidden'];
  accessor dismissible: BannerProps['dismissible'];
  accessor ondismiss: CallbackEventListener<typeof tagName> | null;
  accessor onafterhide: CallbackEventListener<typeof tagName> | null;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Banner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<BannerJSXProps, 'secondaryActions'> &
        PreactBaseElementPropsWithChildren<Banner>;
    }
  }
}

declare const tagName = 's-banner';
export interface BannerJSXProps
  extends Partial<BannerProps>,
    Pick<BannerProps$1, 'id' | 'children'> {
  /**
   * The content of the Banner.
   */
  children?: ComponentChildren;
  /**
   * The secondary actions to display at the bottom of the Banner.
   *
   * Only Buttons with the `variant` of "secondary" or "auto" are permitted. A maximum of two `s-button` components are allowed.
   */
  secondaryActions?: ComponentChildren;
  onDismiss?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onAfterHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Banner};
export type {BannerJSXProps};
