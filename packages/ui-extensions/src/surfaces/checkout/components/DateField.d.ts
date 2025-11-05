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

declare const tagName = "s-date-field";
export interface DateFieldElementProps extends Pick<DateFieldProps$1, 'allow' | 'allowDays' | 'autocomplete' | 'defaultValue' | 'defaultView' | 'disabled' | 'disallow' | 'disallowDays' | 'error' | 'id' | 'label' | 'name' | 'readOnly' | 'required' | 'value' | 'view'> {
    /**
     * @deprecated Use `label` instead.
     * @private
     */
    placeholder?: string;
}
export interface DateFieldEvents extends Pick<DateFieldProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput' | 'onInvalid' | 'onViewChange'> {
}
export interface DateFieldElementEvents {
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
     * Callback when the user enters an invalid date.
     */
    invalid?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the view changes.
     */
    viewChange?: CallbackEventListener<typeof tagName>;
}
export interface DateFieldElement extends DateFieldElementProps, Omit<DateFieldEvents, 'onBlur' | 'onChange' | 'onFocus' | 'onInput' | 'onInvalid' | 'onViewChange'>, Omit<HTMLElement, 'id' | 'inputMode' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'oninvalid' | 'prefix'> {
    onblur: DateFieldEvents['onBlur'];
    onchange: DateFieldEvents['onChange'];
    onfocus: DateFieldEvents['onFocus'];
    oninput: DateFieldEvents['onInput'];
    oninvalid: DateFieldEvents['onInvalid'];
    onviewchange: DateFieldEvents['onViewChange'];
}
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
