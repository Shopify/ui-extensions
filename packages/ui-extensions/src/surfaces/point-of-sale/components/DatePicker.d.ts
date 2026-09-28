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
import type {DatePickerProps, Key, Ref} from './components-shared.d.ts';

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

declare const tagName = 's-date-picker';
/**
 * Lets merchants select a date from a calendar.
 * @publicDocs
 */
export interface DatePickerJSXProps
  extends Pick<DatePickerProps, 'id' | 'value'> {
  /**
   * A unique identifier for the element.
   *
   * An `id` is required to open or close the picker with the command system (for
   * example, a Button with `command="--show"` and `commandFor` set to this `id`)
   * and to receive `onFocus` and `onBlur` events. A picker without an `id` can't
   * be shown.
   */
  id?: DatePickerProps['id'];
  /**
   * The current selected value.
   *
   * The default `''` means no date is selected.
   *
   * The value must be a date in `YYYY-MM-DD` format. Values are interpreted in
   * the device's local timezone. Values that can't be parsed as a date are
   * treated as no selection; out-of-range calendar dates (for example,
   * `2024-02-30`) currently roll over to a valid date instead of being rejected.
   *
   * @default ""
   */
  value?: DatePickerProps['value'];
  /**
   * Callback when the user selects a date from the picker. Fires after `onChange`.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the user selects a date from the picker that is different to the current value. Fires before `onInput`.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the date picker is dismissed.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the date picker is revealed.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<DatePickerJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<DatePickerJSXProps>;
    }
  }
}

export {tagName};
export type {DatePickerJSXProps};
