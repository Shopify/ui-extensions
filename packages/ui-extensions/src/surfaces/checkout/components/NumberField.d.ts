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
import type {NumberFieldProps$1} from './components-shared.d.ts';

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
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = (EventListener & {
    (event: CallbackEvent<TTagName, TEvent>): void;
}) | null;

declare const tagName = "s-number-field";
export interface NumberFieldElementProps extends Pick<NumberFieldProps$1, 'autocomplete' | 'controls' | 'defaultValue' | 'details' | 'disabled' | 'error' | 'icon' | 'id' | 'inputMode' | 'label' | 'labelAccessibilityVisibility' | 'max' | 'min' | 'name' | 'prefix' | 'readOnly' | 'required' | 'step' | 'suffix' | 'value'> {
    /**
     * @deprecated Use `label` instead.
     * @private
     */
    placeholder?: string;
}
export interface NumberFieldEvents extends Pick<NumberFieldProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
export interface NumberFieldElementEvents {
    /**
     * Callback when the element loses focus.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
     */
    blur?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
    /**
     * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    change?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
    /**
     * Callback when the element receives focus.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
     */
    focus?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
    /**
     * Callback when the user makes any changes in the field.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
     */
    input?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
}
export interface NumberFieldElement extends NumberFieldElementProps, Omit<HTMLElement, 'id' | 'inputMode' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: NumberFieldEvents['onBlur'];
    onchange: NumberFieldEvents['onChange'];
    onfocus: NumberFieldEvents['onFocus'];
    oninput: NumberFieldEvents['onInput'];
}
export interface NumberFieldElementSlots {
    /**
     * Additional content to be displayed in the field.
     * Commonly used to display an icon that activates a tooltip providing more information.
     */
    accessory?: HTMLElement;
}
export interface NumberFieldProps extends NumberFieldElementProps, NumberFieldEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: NumberFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: NumberFieldProps & BaseElementPropsWithChildren<NumberFieldElement>;
        }
    }
}

export type { NumberFieldElement, NumberFieldElementEvents, NumberFieldElementProps, NumberFieldElementSlots, NumberFieldEvents, NumberFieldProps };
