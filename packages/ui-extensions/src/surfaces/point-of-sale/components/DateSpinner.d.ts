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
import type {DateSpinnerProps, Key, Ref} from './components-shared.d.ts';

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
export type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T>;
export interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
  currentTarget: HTMLElementTagNameMap[T];
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: HTMLElementTagNameMap[T] | null;
}

declare const tagName = 's-date-spinner';
export interface DateSpinnerJSXProps
  extends Pick<DateSpinnerProps, 'id' | 'value'> {
  /**
   * Callback when the user makes a selection.
   */
  onInput?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * Callback when the value changes. Only called when a different value is selected.
   */
  onChange?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * Callback when the date spinner is dismissed.
   */
  onBlur?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * Callback when the date spinner is revealed.
   */
  onFocus?: (event: CallbackEvent<typeof tagName>) => void | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: DateSpinnerJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<DateSpinnerJSXProps>;
    }
  }
}

export {tagName};
export type {DateSpinnerJSXProps};
