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
import type {EmailFieldProps,Key, Ref} from './components-shared.d.ts';

export type ComponentChildren = any;
/**
 * The base props for elements without children, providing key, ref, and slot properties.
 */
export interface BaseElementProps<TClass = HTMLElement> {
<<<<<<< HEAD
    key?: Key;
    ref?: Ref<TClass>;
    slot?: Lowercase<string>;
=======
  /**
   * A unique identifier for the element in lists. Used by Preact for efficient rendering and reconciliation.
   */
  key?: Key;
  /**
   * A reference to the underlying DOM element. Commonly used to access the element directly for imperative operations.
   */
  ref?: Ref<TClass>;
  /**
   * The named [slot](/docs/api/polaris/using-polaris-web-components#slots) this element should be placed in when used within a web component.
   */
  slot?: Lowercase<string>;
>>>>>>> 2025-10
}
/**
 * The base props for elements with children, extending `BaseElementProps` with children support.
 */
<<<<<<< HEAD
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: ComponentChildren;
}
export type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T & HTMLElement>;
export type HtmlElementTagNameProps<T> = T & HTMLElement;
export interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
    currentTarget: HTMLElementTagNameMap[T];
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
    detail?: any;
    eventPhase: number;
    target: HTMLElementTagNameMap[T] | null;
}

declare const tagName = "s-email-field";
export interface EmailFieldJSXProps extends Pick<EmailFieldProps, 'id' | 'label' | 'value' | 'placeholder' | 'disabled' | 'error' | 'required' | 'maxLength' | 'details'> {
    /**
     * Callback when the user makes any changes in the field.
     */
    onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Callback after editing completes (typically on blur).
     */
    onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Callback when the element loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
=======
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
export type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T>;
/**
 * Represents the event object passed to callback functions when interactive events occur. Contains metadata about the event, including the target element, event phase, and propagation behavior.
 */
export interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
  /**
   * The element that the event listener is attached to.
   */
  currentTarget: HTMLElementTagNameMap[T];
  /**
   * Whether the event bubbles up through the DOM tree.
   */
  bubbles?: boolean;
  /**
   * Whether the event can be canceled.
   */
  cancelable?: boolean;
  /**
   * Whether the event will trigger listeners outside of a shadow root.
   */
  composed?: boolean;
  /**
   * Additional data associated with the event.
   */
  detail?: any;
  /**
   * The current phase of the event flow.
   */
  eventPhase: number;
  /**
   * The element that triggered the event.
   */
  target: HTMLElementTagNameMap[T] | null;
}

declare const tagName = 's-email-field';
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
   * Called when the user makes any changes in the field.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Called after editing completes, typically on blur.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Called when the element loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Called when the element receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Additional content to be displayed in the field. Commonly used to display clickable text or action elements. Only `Button` and `Clickable` components are supported in this slot. Use the `slot="accessory"` attribute to place elements in this area.
   */
  accessory?: ComponentChild;
>>>>>>> 2025-10
}
export type ElementProps = EmailFieldJSXProps;
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

export { tagName };
export type { EmailFieldJSXProps };
