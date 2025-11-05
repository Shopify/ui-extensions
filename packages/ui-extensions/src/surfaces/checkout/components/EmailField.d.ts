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
import type {EmailFieldProps$1} from './components-shared.d.ts';

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
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-email-field";
export interface EmailFieldElementProps extends Pick<EmailFieldProps$1, 'autocomplete' | 'defaultValue' | 'disabled' | 'error' | 'maxLength' | 'minLength' | 'id' | 'label' | 'labelAccessibilityVisibility' | 'name' | 'readOnly' | 'required' | 'value'> {
    /**
     * @deprecated Use `label` instead.
     * @private
     */
    placeholder?: string;
}
export interface EmailFieldEvents extends Pick<EmailFieldProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
export interface EmailFieldElementEvents {
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
export interface EmailFieldElementSlots {
    /**
     * Additional content to be displayed in the field.
     * Commonly used to display an icon that activates a tooltip providing more information.
     */
    accessory?: HTMLElement;
}
export interface EmailFieldElement extends EmailFieldElementProps, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: EmailFieldEvents['onBlur'];
    onchange: EmailFieldEvents['onChange'];
    onfocus: EmailFieldEvents['onFocus'];
    oninput: EmailFieldEvents['onInput'];
}
export interface EmailFieldProps extends EmailFieldElementProps, EmailFieldEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: EmailFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: EmailFieldProps & BaseElementPropsWithChildren<EmailFieldElement>;
        }
    }
}

export type { EmailFieldElement, EmailFieldElementEvents, EmailFieldElementProps, EmailFieldElementSlots, EmailFieldEvents, EmailFieldProps };
