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
import type {TextAreaProps, Key, Ref} from './components-shared.d.ts';

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

declare const tagName$1 = 's-text-area';
/**
 * Collects multi-line text input from the merchant.
 * @publicDocs
 */
export interface TextAreaJSXProps
  extends Pick<
    TextAreaProps,
    | 'id'
    | 'label'
    | 'details'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'maxLength'
    | 'rows'
  > {
  /**
   * The current value for the field. If omitted, the field manages its own state.
   *
   * Set `value` and update it from `onInput` or `onChange` to control the field.
   */
  value?: TextAreaProps['value'];
  /**
   * A number of visible text lines.
   *
   * Sets the visible height of the field only; it doesn't limit how many lines of
   * text can be entered. Values are clamped between 1 and 8.
   *
   * @default 2
   */
  rows?: TextAreaProps['rows'];
  /**
   * Callback when the user makes any changes in the field.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  /**
   * Callback after editing completes, on blur. Fires only when the value
   * changed since the field received focus.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  /**
   * Callback when the element loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  /**
   * Callback when the element receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
}

declare const tagName = 's-text-area';
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<TextAreaJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<TextAreaJSXProps>;
    }
  }
}

export {tagName};
export type {TextAreaJSXProps};
