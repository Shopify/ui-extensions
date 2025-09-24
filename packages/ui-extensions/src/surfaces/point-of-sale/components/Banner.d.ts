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
  BannerProps,
  Key,
  Ref,
  ComponentChild,
} from './components-shared.d.ts';

export type ComponentChildren = any;
/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren;
}

declare const tagName = 's-banner';
export interface BannerJSXProps extends Pick<BannerProps, 'heading' | 'id'> {
  /**
   * Determines whether the banner is hidden.
   */
  hidden?: BannerProps['hidden'];
  /**
   * Sets the tone of the Banner, based on the intention of the information being conveyed.
   */
  tone?: Extract<
    BannerProps['tone'],
    'success' | 'info' | 'warning' | 'critical'
  >;
  /**
   * The action taken when the Banner is pressed.
   */
  primaryAction?: ComponentChild;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: BannerJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<BannerJSXProps, 'primaryAction'> &
        BaseElementPropsWithChildren<Omit<BannerJSXProps, 'primaryAction'>>;
    }
  }
}

export {tagName};
export type {BannerJSXProps};
