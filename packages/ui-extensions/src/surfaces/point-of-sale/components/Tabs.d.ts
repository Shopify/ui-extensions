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
import type {TabsProps, Key, Ref} from './components-shared.d.ts';

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

declare const tagName$1 = 's-tabs';
/**
 * Groups related content into selectable tabbed views.
 * @publicDocs
 */
export interface TabsJSXProps
  extends Pick<TabsProps, 'value' | 'defaultValue' | 'disabled'> {
  /**
   * The value of the selected tab.
   *
   * This should match the `id` prop of one of the TabPanel components.
   * When neither `value` nor `defaultValue` is provided, the first rendered tab panel is selected.
   */
  value?: string;
  /**
   * The default value of the selected tab.
   *
   * This should match the `id` prop of one of the TabPanel components.
   * Sets the initial selected tab in uncontrolled usage. Setting `value` afterwards overrides it.
   */
  defaultValue?: string;
  children?: ComponentChildren;
  /**
   * Callback fired when the selected tab changes.
   *
   * Fires on every tab selection, including when the current tab is selected again.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
}

declare const tagName = 's-tabs';
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<TabsJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<TabsJSXProps>;
    }
  }
}

export {tagName};
export type {TabsJSXProps};
