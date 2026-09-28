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
import type {EmailFieldProps, Key, Ref} from './components-shared.d.ts';

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

declare const tagName$1 = 's-email-field';
/**
 * Collects email address input.
 * @publicDocs
 */
export interface EmailFieldJSXProps
  extends Pick<
    EmailFieldProps,
    | 'id'
    | 'label'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'maxLength'
    | 'details'
  > {
  /**
   * The current value for the field. If omitted, the field manages its own state.
   *
   * Set `value` and update it from `onInput` or `onChange` to control the field.
   */
  value?: EmailFieldProps['value'];
  /**
   * Callback when the user makes any changes in the field.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  /**
   * Callback after editing completes, on blur or submit. Fires only when the value
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

declare const tagName = 's-email-field';
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<EmailFieldJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<EmailFieldJSXProps>;
    }
  }
}

export {tagName};
export type {EmailFieldJSXProps};
