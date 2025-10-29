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
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-date-picker";
export interface DatePickerElementProps extends Pick<DatePickerProps$1, 'allow' | 'allowDays' | 'defaultValue' | 'defaultView' | 'disabled' | 'disallow' | 'disallowDays' | 'id' | 'name' | 'type' | 'value' | 'view'> {
}
export interface DatePickerEvents extends Pick<DatePickerProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput' | 'onViewChange'> {
}
export interface DatePickerElementEvents {
    /**
     * Callback when the element loses focus.
     */
    blur?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
     */
    change?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the element receives focus.
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
export interface DatePickerElement extends DatePickerElementProps, Omit<DatePickerEvents, 'onBlur' | 'onChange' | 'onFocus' | 'onInput' | 'onViewChange'>, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput'> {
    onblur: DatePickerEvents['onBlur'];
    onchange: DatePickerEvents['onChange'];
    onfocus: DatePickerEvents['onFocus'];
    oninput: DatePickerEvents['onInput'];
    onviewchange: DatePickerEvents['onViewChange'];
}
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
