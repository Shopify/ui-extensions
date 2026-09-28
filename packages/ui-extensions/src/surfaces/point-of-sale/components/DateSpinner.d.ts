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

declare const tagName = 's-date-spinner';
/**
 * Lets merchants select a date using spinner controls.
 * @publicDocs
 */
export interface DateSpinnerJSXProps
  extends Pick<DateSpinnerProps, 'id' | 'value'> {
  /**
   * A unique identifier for the element.
   *
   * An `id` is required to open or close the picker with the command system (for
   * example, a Button with `command="--show"` and `commandFor` set to this `id`)
   * and to receive `onFocus` and `onBlur` events. A picker without an `id` can't
   * be shown.
   */
  id?: DateSpinnerProps['id'];
  /**
   * The current selected value for the spinner, as a date in `YYYY-MM-DD` format.
   *
   * The default `''` means no date is selected. Values are interpreted in the
   * device's local timezone. Out-of-range calendar dates (for example,
   * `2024-02-30`) currently roll over to a valid date instead of being rejected.
   *
   * @default ""
   */
  value?: DateSpinnerProps['value'];
  /**
   * Callback when the user makes a selection. Fires after `onChange`.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the value changes. Only called when a different value is selected. Fires before `onInput`.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the date spinner is dismissed.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the date spinner is revealed.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<DateSpinnerJSXProps>;
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
