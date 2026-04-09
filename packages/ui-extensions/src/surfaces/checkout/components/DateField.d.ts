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
 * Configure the following properties on the date field component.
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
 * The date field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface DateFieldElementEvents {
    /**
<<<<<<< HEAD
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
=======
     * A callback fired when the date field value changes.
     *
     * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
     */
    change?: CallbackEventListener<typeof tagName>;
    /**
     * A callback fired when the user inputs data into the date field.
     *
     * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
>>>>>>> 8763c703b (Improve Forms component descriptions to match admin quality)
     */
    input?: CallbackEventListener<typeof tagName>;
    /**
     * A callback fired when the date field loses focus.
     *
     * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
     */
    blur?: CallbackEventListener<typeof tagName>;
    /**
     * A callback fired when the date field receives focus.
     *
     * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
     */
    focus?: CallbackEventListener<typeof tagName>;
    /**
     * A callback fired when the calendar view changes (such as when navigating between months).
     */
    viewChange?: CallbackEventListener<typeof tagName>;
    /**
     * A callback fired when the date field value is invalid.
     *
     * Learn more about the [invalid event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event).
     */
    invalid?: CallbackEventListener<typeof tagName>;
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
