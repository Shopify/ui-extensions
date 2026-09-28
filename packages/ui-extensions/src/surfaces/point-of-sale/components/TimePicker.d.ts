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
import type {TimePickerProps, Key, Ref} from './components-shared.d.ts';

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

declare const tagName = 's-time-picker';
/**
 * Lets merchants select a time from a picker.
 * @publicDocs
 */
export interface TimePickerJSXProps
  extends Pick<TimePickerProps, 'id' | 'value'> {
  /**
   * A unique identifier for the element.
   *
   * An `id` is required to open or close the picker with the command system (for
   * example, a Button with `command="--show"` and `commandFor` set to this `id`)
   * and to receive `onFocus` and `onBlur` events. A picker without an `id` can't
   * be shown.
   */
  id?: TimePickerProps['id'];
  /**
   * The current selected value.
   *
   * The default `''` means no time is selected.
   *
   * The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros
   * (for example, `"09:05:00"`). Seconds aren't captured: emitted values always
   * end in `:00`, and seconds in a provided value are ignored. Values are
   * interpreted in the device's local timezone.
   *
   * @default ''
   */
  value?: TimePickerProps['value'];
  /**
   * Callback when the user selects a time from the picker. Fires after `onChange`.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the user selects a time from the picker that is different to the current value. Fires before `onInput`.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the time picker is dismissed.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the time picker is revealed.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<TimePickerJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<TimePickerJSXProps>;
    }
  }
}

export {tagName};
export type {TimePickerJSXProps};
