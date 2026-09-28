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
import type {TimeFieldProps, Key, Ref} from './components-shared.d.ts';

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

declare const tagName = 's-time-field';
/**
 * Collects a time value.
 * @publicDocs
 */
export interface TimeFieldJSXProps
  extends Pick<
    TimeFieldProps,
    'id' | 'label' | 'disabled' | 'value' | 'error' | 'details' | 'required'
  > {
  /**
   * The current value for the field, as a 24-hour time in `HH:mm:ss` format with
   * leading zeros (for example, `"09:05:00"`). If omitted or empty, the field is
   * empty.
   *
   * Seconds aren't captured: emitted values always end in `:00`, and seconds in a
   * provided value are ignored. Values are interpreted in the device's local
   * timezone. The field displays times in 12-hour AM/PM format.
   */
  value?: TimeFieldProps['value'];
  /**
   * Callback when the user confirms a time in the picker. Fires together with
   * `onChange` at selection time.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the user confirms a time in the picker. Fires together with
   * `onInput` at selection time, not on blur.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the element loses focus. Also fires right after a picker
   * selection is confirmed, and when the picker is dismissed without a selection.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the element receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<TimeFieldJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<TimeFieldJSXProps>;
    }
  }
}

export {tagName};
export type {TimeFieldJSXProps};
