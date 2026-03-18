/** VERSION: 0.0.0 **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {URLFieldProps} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: preact.ComponentChildren;
}
/**
 * An event type that narrows the `currentTarget` to the specific HTML element associated with the custom element tag. This provides type-safe event handling in callback listeners.
 */
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
/**
 * A typed event listener for custom element events. The listener receives a `CallbackEvent` with the correct `currentTarget` type for the associated custom element tag.
 */
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-url-field";
/**
 * The URL field component collects URLs from users with built-in formatting and validation. Use URL field for website addresses, link destinations, or any URL input to provide URL-specific keyboard layouts and automatic validation.
 *
 * URL fields support protocol prefixing, validation, and help text to guide users toward entering properly formatted web addresses. For general text input, use [text field](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/text-field).
 * @publicDocs
 */
export interface UrlFieldElementProps extends Pick<URLFieldProps, 'autocomplete' | 'defaultValue' | 'disabled' | 'error' | 'id' | 'label' | 'labelAccessibilityVisibility' | 'maxLength' | 'minLength' | 'name' | 'readOnly' | 'required' | 'value'> {
}
export interface UrlFieldEvents extends Pick<URLFieldProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
/**
 * Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).
 * @publicDocs
 */
export interface UrlFieldElementEvents {
    /**
     * Callback when the element loses focus.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
     */
    blur?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    change?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the element receives focus.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
     */
    focus?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the user makes any changes in the field.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
     */
    input?: CallbackEventListener<typeof tagName>;
}
/**
 * Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).
 * @publicDocs
 */
export interface UrlFieldElementSlots {
    /**
     * Additional content to be displayed in the field.
     * Commonly used to display an icon that activates a tooltip providing more information.
     */
    accessory?: HTMLElement;
}
export interface UrlFieldElement extends UrlFieldElementProps, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: UrlFieldEvents['onBlur'];
    onchange: UrlFieldEvents['onChange'];
    onfocus: UrlFieldEvents['onFocus'];
    oninput: UrlFieldEvents['onInput'];
}
export interface UrlFieldProps extends UrlFieldElementProps, UrlFieldEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: UrlFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: UrlFieldProps & BaseElementPropsWithChildren<UrlFieldElement>;
        }
    }
}

export type { UrlFieldElement, UrlFieldElementEvents, UrlFieldElementProps, UrlFieldElementSlots, UrlFieldEvents, UrlFieldProps };
