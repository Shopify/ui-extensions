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
import type {LinkProps, Key, Ref} from './components-shared.d.ts';

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
export type ElementForTag<T extends string> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : HTMLElement;
export interface CallbackEvent<T extends string> {
  currentTarget: ElementForTag<T>;
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: ElementForTag<T> | null;
}

declare const tagName$1 = 's-link';
/**
 * The link component makes text interactive, allowing users to trigger actions through tappable text. Use it for lightweight interactions, navigation triggers, or actions embedded within text content.
 *
 * Links support the command system for controlling other components declaratively. Use `command` and `commandFor` to show, hide, or toggle modals and other targetable elements. For primary actions like submitting forms or triggering operations, use [button](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/actions/button) instead.
 * @publicDocs
 */
export interface LinkJSXProps
  extends Pick<
    LinkProps,
    'id' | 'commandFor' | 'command' | 'accessibilityLabel'
  > {
  /**
   * Called when the link is activated.
   */
  onClick?: (event: CallbackEvent<typeof tagName$1>) => void;
  /**
   * The Link content.
   */
  children?: ComponentChildren;
}

declare const tagName = 's-link';
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<LinkJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<LinkJSXProps>;
    }
  }
}

export {tagName};
export type {LinkJSXProps};
