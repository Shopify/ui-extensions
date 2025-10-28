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
import type {PhoneFieldProps$1, ConsentPhoneFieldProps$1} from './components-shared.d.ts';

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

declare const tagName$1 = "s-phone-field";
export interface PhoneFieldElementProps extends Pick<PhoneFieldProps$1, 'autocomplete' | 'defaultValue' | 'disabled' | 'error' | 'id' | 'label' | 'labelAccessibilityVisibility' | 'name' | 'readOnly' | 'required' | 'value' | 'type'> {
    /**
     * @deprecated Use `label` instead.
     * @private
     */
    placeholder?: string;
}
export interface PhoneFieldEvents extends Pick<PhoneFieldProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
export interface PhoneFieldElement extends PhoneFieldElementProps, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: PhoneFieldEvents['onBlur'];
    onchange: PhoneFieldEvents['onChange'];
    onfocus: PhoneFieldEvents['onFocus'];
    oninput: PhoneFieldEvents['onInput'];
}
export interface PhoneFieldProps extends PhoneFieldElementProps, PhoneFieldEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$1]: PhoneFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$1]: PhoneFieldProps & BaseElementPropsWithChildren<PhoneFieldElement>;
        }
    }
}

declare const tagName = "s-consent-phone-field";
export interface ConsentPhoneFieldElementProps extends Pick<ConsentPhoneFieldProps$1, 'autocomplete' | 'defaultValue' | 'disabled' | 'error' | 'id' | 'label' | 'labelAccessibilityVisibility' | 'name' | 'policy' | 'readOnly' | 'required' | 'type' | 'value'> {
    /**
     * @deprecated Use `label` instead.
     * @private
     */
    placeholder?: string;
}
export interface ConsentPhoneFieldEvents extends Pick<PhoneFieldEvents, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
export interface ConsentPhoneFieldElementEvents {
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
export interface ConsentPhoneFieldElement extends ConsentPhoneFieldElementProps, Omit<ConsentPhoneFieldEvents, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
    onblur: ConsentPhoneFieldEvents['onBlur'];
    onchange: ConsentPhoneFieldEvents['onChange'];
    onfocus: ConsentPhoneFieldEvents['onFocus'];
    oninput: ConsentPhoneFieldEvents['onInput'];
}
export interface ConsentPhoneFieldElementSlots {
    /**
     * Additional content to be displayed in the field.
     * Commonly used to display an icon that activates a tooltip providing more information.
     */
    accessory?: HTMLElement;
}
export interface ConsentPhoneFieldProps extends ConsentPhoneFieldElementProps, ConsentPhoneFieldEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ConsentPhoneFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ConsentPhoneFieldProps & BaseElementPropsWithChildren<ConsentPhoneFieldElement>;
        }
    }
}

export type { ConsentPhoneFieldElement, ConsentPhoneFieldElementEvents, ConsentPhoneFieldElementProps, ConsentPhoneFieldElementSlots, ConsentPhoneFieldEvents, ConsentPhoneFieldProps };
