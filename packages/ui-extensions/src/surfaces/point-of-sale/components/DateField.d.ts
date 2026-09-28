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
import type {DateFieldProps, Key, Ref} from './components-shared.d.ts';

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

declare const tagName = 's-date-field';
/**
 * Collects date input as text.
 * @publicDocs
 */
export interface DateFieldJSXProps
  extends Pick<
    DateFieldProps,
    'id' | 'label' | 'details' | 'value' | 'disabled' | 'error' | 'required'
  > {
  /**
   * The current value for the field, as a date in `YYYY-MM-DD` format (for
   * example, `"2024-05-15"`). If omitted or empty, the field is empty.
   *
   * Values are interpreted in the device's local timezone. Out-of-range calendar
   * dates (for example, `2024-02-30`) currently roll over to a valid date instead
   * of being rejected.
   */
  value?: DateFieldProps['value'];
  /**
   * Callback when the user confirms a date in the picker. Fires together with
   * `onChange` at selection time.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the user confirms a date in the picker. Fires together with
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
export type ElementProps = Omit<DateFieldJSXProps, 'accessory'>;
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
export type {DateFieldJSXProps};
