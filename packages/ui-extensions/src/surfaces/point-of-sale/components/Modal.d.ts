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
import type {
  ModalProps,
  Key,
  Ref,
  ComponentChild,
} from './components-shared.d.ts';

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

declare const tagName = 's-modal';
export interface ModalJSXProps extends Pick<ModalProps, 'id' | 'heading'> {
  /**
   * Callback when the modal is hidden.
   */
  onHide?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * Callback when the modal is shown.
   */
  onShow?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * The primary action button displayed in the modal.
   *
   * The tone of the button is used to define the tone of the modal.
   *
   * If omitted, the modal will default to an 'info' tone, and show an 'OK' button, translated according to the user's locale.
   */
  primaryAction?: ComponentChild;
  /**
   * The secondary action buttons displayed in the modal.
   */
  secondaryActions?: ComponentChild;
  /**
   * The content of the Modal.
   */
  children?: ComponentChildren;
}
export type ElementProps = Omit<
  ModalJSXProps,
  'primaryAction' | 'secondaryActions'
>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ElementProps;
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
export type {ModalJSXProps};
