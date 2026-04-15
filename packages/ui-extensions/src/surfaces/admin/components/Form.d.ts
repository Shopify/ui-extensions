/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ExtendableEvent,
  FormProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
export interface CallbackExtendableEvent<
  TTagName extends keyof HTMLElementTagNameMap,
> extends CallbackEvent<TTagName>,
    Pick<ExtendableEvent, 'waitUntil'> {}
/**
 * A function that handles extendable events from UI components.
 * This type represents an event listener callback that can use `waitUntil` to extend the event lifetime.
 */
export type CallbackExtendableEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
> =
  | (EventListener & {
      (event: CallbackExtendableEvent<TTagName>): void;
    })
  | null;

/**
 * The properties for the form component. These properties configure the form's identifier for targeting and referencing within the admin extension.
 * @publicDocs
 */
export interface FormProps extends Pick<FormProps$1, 'id'> {}

declare const tagName = 's-form';
/**
 * The JSX props for the form component. These properties extend `FormProps` with event callbacks for form submission and reset actions in JSX rendering.
 * @publicDocs
 */
export interface FormJSXProps extends Partial<FormProps> {
  /**
   * A callback that's invoked when the form is submitted. Use the event's `waitUntil` method to perform async operations like validation or data processing before the submission completes.
   */
  onSubmit?: ((event: CallbackExtendableEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's invoked when the form is reset, restoring all form fields to their initial values.
   */
  onReset?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * The form custom element class that renders a form container in the Shopify admin interface. This component manages form submission, validation, and reset behavior for collecting merchant input.
 */
declare class Form extends PolarisCustomElement implements FormProps {
  constructor();
  /**
   * A callback that's invoked when the form is submitted. Use the event's `waitUntil` method to perform async operations like validation, data processing, or API calls before the submission completes.
   */
  accessor onsubmit: CallbackExtendableEventListener<typeof tagName> | null;
  /**
   * A callback that's invoked when the form is reset, restoring all form fields to their initial values.
   */
  accessor onreset: CallbackEventListener<typeof tagName> | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Form;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: FormJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export {Form};
export type {FormJSXProps};
