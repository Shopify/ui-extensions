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
export type IntrinsicElementProps<T> = T &
  BaseElementPropsWithChildren<T & HTMLElement>;
export type HtmlElementTagNameProps<T> = T & HTMLElement;

declare const tagName = 's-banner';
/**
 * Shows prominent status and messaging content with optional actions.
 * @publicDocs
 */
export interface BannerJSXProps extends Pick<BannerProps, 'heading' | 'id'> {
  /**
   * Determines whether the banner is hidden.
   *
   * @default false
   */
  hidden?: BannerProps['hidden'];
  /**
   * Sets the tone of the Banner, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: Extract<
    BannerProps['tone'],
    'auto' | 'success' | 'info' | 'warning' | 'critical'
  >;
  /**
   * The primary action for the banner, provided as a button element in the `primary-action` slot.
   *
   * The POS renderer displays the action only when the slotted button has both text content and an
   * `onClick` handler; otherwise the action is dropped.
   */
  primaryAction?: ComponentChild;
  /**
   * The content of the Banner.
   *
   * The POS renderer currently doesn't render banner children; use `heading` for the message text.
   */
  children?: ComponentChildren;
}
export type ElementProps = Omit<BannerJSXProps, 'primaryAction'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<ElementProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<ElementProps>;
    }
  }
}

export {tagName};
export type {BannerJSXProps};
