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
import type {MoneyFieldProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-money-field";
/**
 * The money field component collects monetary values from users with built-in currency formatting and validation. Use money field for prices, costs, or financial amounts to provide proper currency symbols, decimal handling, and numeric validation.
 *
 * Money fields support currency codes, automatic formatting, and min/max constraints to ensure users enter valid monetary values. For non-currency numeric input, use [number field](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/number-field).
 * @publicDocs
 */
export interface MoneyFieldElementProps extends Pick<MoneyFieldProps$1, 'autocomplete' | 'defaultValue' | 'disabled' | 'error' | 'id' | 'label' | 'labelAccessibilityVisibility' | 'max' | 'min' | 'name' | 'readOnly' | 'required' | 'step' | 'value'> {
}
/** @publicDocs */
export interface MoneyFieldEvents extends Pick<MoneyFieldProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
/**
 * Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).
 * @publicDocs
 */
export interface MoneyFieldElementEvents {
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
/** @publicDocs */
export interface MoneyFieldElement extends MoneyFieldElementProps {
    onblur: MoneyFieldEvents['onBlur'];
    onchange: MoneyFieldEvents['onChange'];
    onfocus: MoneyFieldEvents['onFocus'];
    oninput: MoneyFieldEvents['onInput'];
}
/** @publicDocs */
export interface MoneyFieldProps extends MoneyFieldElementProps, MoneyFieldEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: MoneyFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: MoneyFieldProps & BaseElementProps<MoneyFieldElement>;
        }
    }
}

export type { MoneyFieldElement, MoneyFieldElementEvents, MoneyFieldElementProps, MoneyFieldEvents, MoneyFieldProps };
