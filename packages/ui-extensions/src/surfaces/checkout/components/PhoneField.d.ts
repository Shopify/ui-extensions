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
import type {PhoneFieldProps$1} from './components-shared.d.ts';
import { ReactNode } from 'react';

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
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = (EventListener & {
    (event: CallbackEvent<TTagName, TEvent>): void;
}) | null;

declare const tagName = "s-phone-field";
export interface PhoneFieldElementProps extends Pick<PhoneFieldProps$1, 'autocomplete' | 'defaultValue' | 'disabled' | 'error' | 'id' | 'label' | 'labelAccessibilityVisibility' | 'name' | 'placeholder' | 'readOnly' | 'required' | 'value' | 'type'> {
}
export interface PhoneFieldEvents extends Pick<PhoneFieldProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
export interface PhoneFieldElementEvents {
    /**
     * Callback when the element loses focus.
     */
    blur?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
    /**
     * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
     */
    change?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    focus?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
    /**
     * Callback when the user makes any changes in the field.
     */
    input?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
}
export interface PhoneFieldSlots extends Pick<PhoneFieldProps$1, 'accessory'> {
    /**
     * Additional content to be displayed in the field.
     * Commonly used to display an icon that activates a tooltip providing more information.
     */
    accessory?: ReactNode;
}
export interface PhoneFieldElementSlots {
    /**
     * Additional content to be displayed in the field.
     * Commonly used to display an icon that activates a tooltip providing more information.
     */
    accessory?: HTMLElement;
}
export interface PhoneFieldElement extends PhoneFieldElementProps, PhoneFieldSlots, Omit<PhoneFieldEvents, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: PhoneFieldEvents['onBlur'];
    onchange: PhoneFieldEvents['onChange'];
    onfocus: PhoneFieldEvents['onFocus'];
    oninput: PhoneFieldEvents['onInput'];
}
export interface PhoneFieldProps extends PhoneFieldElementProps, PhoneFieldSlots, PhoneFieldEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: PhoneFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: PhoneFieldProps & BaseElementProps<PhoneFieldElement>;
        }
    }
}

export type { PhoneFieldElement, PhoneFieldElementEvents, PhoneFieldElementProps, PhoneFieldElementSlots, PhoneFieldEvents, PhoneFieldProps, PhoneFieldSlots };
