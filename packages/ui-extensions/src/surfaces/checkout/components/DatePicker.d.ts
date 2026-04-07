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
import type {DatePickerProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-date-picker";
/**
 * The date picker component allows merchants to select dates using a calendar interface. Use it when merchants benefit from seeing dates in context of the full month, such as selecting dates relative to today or needing weekday context.
 *
 * The component supports single dates, multiple dates, and date ranges. For text date entry, use [date field](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/date-field).
 * @publicDocs
 */
export interface DatePickerElementProps extends Pick<DatePickerProps$1, 'allow' | 'allowDays' | 'defaultValue' | 'defaultView' | 'disabled' | 'disallow' | 'disallowDays' | 'id' | 'name' | 'type' | 'value' | 'view'> {
}
/** @publicDocs */
export interface DatePickerEvents extends Pick<DatePickerProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput' | 'onViewChange'> {
}
/**
 * Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).
 * @publicDocs
 */
export interface DatePickerElementEvents {
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
     * Callback when the view changes.
     */
    viewChange?: CallbackEventListener<typeof tagName>;
}
/** @publicDocs */
export interface DatePickerElement extends DatePickerElementProps, Omit<DatePickerEvents, 'onBlur' | 'onChange' | 'onFocus' | 'onInput' | 'onViewChange'>, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput'> {
    onblur: DatePickerEvents['onBlur'];
    onchange: DatePickerEvents['onChange'];
    onfocus: DatePickerEvents['onFocus'];
    oninput: DatePickerEvents['onInput'];
    onviewchange: DatePickerEvents['onViewChange'];
}
/** @publicDocs */
export interface DatePickerProps extends DatePickerElementProps, DatePickerEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: DatePickerElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: DatePickerProps & BaseElementProps<DatePickerElement>;
        }
    }
}

export type { DatePickerElement, DatePickerElementEvents, DatePickerElementProps, DatePickerEvents, DatePickerProps };
