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
export interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
  currentTarget: HTMLElementTagNameMap[T];
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: HTMLElementTagNameMap[T] | null;
}

declare const tagName = 's-time-field';
export interface TimeFieldJSXProps
  extends Pick<
    TimeFieldProps,
    'id' | 'label' | 'disabled' | 'value' | 'error' | 'details'
  > {
  /** Function called when the user makes any changes in the field. */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /** Function called after editing completes (typically on blur). */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /** Function called when the element loses focus. */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /** Function called when the element receives focus. */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TimeFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TimeFieldJSXProps &
        BaseElementPropsWithChildren<TimeFieldJSXProps>;
    }
  }
}

export {tagName};
export type {TimeFieldJSXProps};
