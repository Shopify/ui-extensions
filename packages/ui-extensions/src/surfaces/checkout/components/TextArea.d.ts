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
import type {TextAreaProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-text-area";
export interface TextAreaElementProps extends Pick<TextAreaProps$1, 'id' | 'label' | 'name' | 'required' | 'value' | 'autocomplete' | 'defaultValue' | 'disabled' | 'error' | 'readOnly' | 'rows' | 'maxLength' | 'minLength' | 'labelAccessibilityVisibility'> {
    /**
     * @deprecated Use `label` instead.
     * @private
     */
    placeholder?: string;
}
export interface TextAreaEvents extends Pick<TextAreaProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
export interface TextAreaElementEvents {
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
export interface TextAreaElement extends TextAreaElementProps, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput'> {
    onblur: TextAreaEvents['onBlur'];
    onchange: TextAreaEvents['onChange'];
    onfocus: TextAreaEvents['onFocus'];
    oninput: TextAreaEvents['onInput'];
}
export interface TextAreaProps extends TextAreaElementProps, TextAreaEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: TextAreaElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: TextAreaProps & BaseElementProps<TextAreaElement>;
        }
    }
}

export type { TextAreaElement, TextAreaElementEvents, TextAreaElementProps, TextAreaEvents, TextAreaProps };
