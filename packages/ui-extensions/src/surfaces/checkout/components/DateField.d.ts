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
import type {DateFieldProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-date-field";
/**
 * The date field component captures date input with a consistent interface for date selection and proper validation. Use it to collect date information in forms, scheduling interfaces, or data entry workflows.
 *
 * The component supports manual text entry. For visual calendar-based selection, consider using [date picker](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/date-picker).
 * @publicDocs
 */
export interface DateFieldElementProps extends Pick<DateFieldProps$1, 'allow' | 'allowDays' | 'autocomplete' | 'defaultValue' | 'defaultView' | 'disabled' | 'disallow' | 'disallowDays' | 'error' | 'id' | 'label' | 'name' | 'readOnly' | 'required' | 'value' | 'view'> {
    /**
     * @deprecated Use `label` instead.
     * @private
     */
    placeholder?: string;
}
/** @publicDocs */
export interface DateFieldEvents extends Pick<DateFieldProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput' | 'onInvalid' | 'onViewChange'> {
}
/**
 * Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).
 * @publicDocs
 */
export interface DateFieldElementEvents {
    /**
     * A callback fired when the element loses focus. Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
     */
    blur?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the user has **finished editing** a field, for example, once they have blurred the field.
     */
    change?: CallbackEventListener<typeof tagName>;
    /**
     * A callback fired when the element receives focus. Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
     */
    focus?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the user makes any changes in the field.
     */
    input?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the user enters an invalid date.
     */
    invalid?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the view changes.
     */
    viewChange?: CallbackEventListener<typeof tagName>;
}
/** @publicDocs */
export interface DateFieldElement extends DateFieldElementProps, Omit<DateFieldEvents, 'onBlur' | 'onChange' | 'onFocus' | 'onInput' | 'onInvalid' | 'onViewChange'>, Omit<HTMLElement, 'id' | 'inputMode' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'oninvalid' | 'prefix'> {
    onblur: DateFieldEvents['onBlur'];
    onchange: DateFieldEvents['onChange'];
    onfocus: DateFieldEvents['onFocus'];
    oninput: DateFieldEvents['onInput'];
    oninvalid: DateFieldEvents['onInvalid'];
    onviewchange: DateFieldEvents['onViewChange'];
}
/** @publicDocs */
export interface DateFieldProps extends DateFieldElementProps, DateFieldEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: DateFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: DateFieldProps & BaseElementProps<DateFieldElement>;
        }
    }
}

export type { DateFieldElement, DateFieldElementEvents, DateFieldElementProps, DateFieldEvents, DateFieldProps };
