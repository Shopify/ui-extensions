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

declare const tagName = 's-modal';
/**
 * The modal component displays content in an overlay that requires merchant attention. Use modals to present critical information, confirmations, or focused tasks while maintaining page context.
 *
 * Modals block interaction with the underlying interface until the merchant resolves the modal content.
 *
 * Modals don't automatically handle state management or persistence, so control visibility programmatically with the `command` and `commandFor` attributes. The events notify your code when the modal starts to show or hide.
 * @publicDocs
 */
export interface ModalJSXProps extends Pick<ModalProps, 'id' | 'heading'> {
  /**
   * A unique identifier for the element.
   *
   * Required to control visibility: a button or link with `commandFor` set to this `id` shows, hides, or toggles the modal.
   */
  id?: string;
  /**
   * Callback when the modal starts to hide. Fired when a `commandFor` command requests the modal to close, before the closing transition completes.
   */
  onHide?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * Callback when the modal starts to show. Fired when a `commandFor` command requests the modal to open, before the opening transition completes.
   */
  onShow?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * The primary action button displayed in the modal.
   *
   * Setting the button's tone to `critical` presents the modal with destructive styling for irreversible actions; other tones don't change the modal's appearance.
   *
   * If omitted, the modal uses the default tone and shows a 'Close' button, translated according to the user's locale.
   */
  primaryAction?: ComponentChild;
  /**
   * The secondary action buttons displayed in the modal. At most two secondary actions are rendered.
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
export type {ModalJSXProps};
