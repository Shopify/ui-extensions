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
import type {PasswordFieldProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 * @publicDocs
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 * @publicDocs
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: preact.ComponentChildren;
}
/**
 * An event type that narrows the `currentTarget` to the specific HTML element associated with the custom element tag. This provides type-safe event handling in callback listeners.
 * @publicDocs
 */
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
/**
 * A typed event listener for custom element events. The listener receives a `CallbackEvent` with the correct `currentTarget` type for the associated custom element tag.
 * @publicDocs
 */
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-password-field";
/**
 * The password field component securely collects sensitive information from users. Use password field for password entry, where input characters are automatically masked for privacy.
 *
 * Password fields support validation, help text, and accessibility features to create secure and user-friendly authentication experiences. For general text input, use [text field](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/text-field).
 * @publicDocs
 */
export interface PasswordFieldElementProps extends Pick<PasswordFieldProps$1, 'autocomplete' | 'defaultValue' | 'disabled' | 'error' | 'id' | 'label' | 'labelAccessibilityVisibility' | 'maxLength' | 'minLength' | 'name' | 'readOnly' | 'required' | 'value'> {
}
/** @publicDocs */
export interface PasswordFieldEvents extends Pick<PasswordFieldProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
/**
 * Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).
 * @publicDocs
 */
export interface PasswordFieldElementEvents {
    /**
     * A callback fired when the element loses focus. Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
     */
    blur?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the user has **finished editing** a field, for example, once they have blurred the field.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    change?: CallbackEventListener<typeof tagName>;
    /**
     * A callback fired when the element receives focus. Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
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
export interface PasswordFieldElementSlots {
    /**
     * Additional content to be displayed in the field.
     * Commonly used to display an icon that activates a tooltip providing more information.
     */
    accessory?: HTMLElement;
}
/** @publicDocs */
export interface PasswordFieldElement extends PasswordFieldProps, Omit<HTMLElement, 'id' | 'inputMode' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: PasswordFieldEvents['onBlur'];
    onchange: PasswordFieldEvents['onChange'];
    onfocus: PasswordFieldEvents['onFocus'];
    oninput: PasswordFieldEvents['onInput'];
}
/** @publicDocs */
export interface PasswordFieldProps extends PasswordFieldElementProps, PasswordFieldEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: PasswordFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: PasswordFieldProps & BaseElementPropsWithChildren<PasswordFieldElement>;
        }
    }
}

export type { PasswordFieldElement, PasswordFieldElementEvents, PasswordFieldElementProps, PasswordFieldElementSlots, PasswordFieldEvents, PasswordFieldProps };
