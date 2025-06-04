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
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};

declare const tagName = "s-email-field";
export interface EmailFieldBaseProps extends Pick<EmailFieldProps$1, 'autocomplete' | 'defaultValue' | 'disabled' | 'error' | 'maxLength' | 'minLength' | 'id' | 'label' | 'labelAccessibilityVisibility' | 'name' | 'placeholder' | 'readOnly' | 'required' | 'value'> {
}
export interface EmailFieldEvents extends Pick<EmailFieldProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
export interface EmailFieldElementEvents {
    /**
     * Callback when the element loses focus.
     */
    blur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
     */
    change?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    focus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Callback when the user makes any changes in the field.
     */
    input?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface EmailFieldElement extends EmailFieldBaseProps, Omit<EmailFieldEvents, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: EmailFieldEvents['onBlur'];
    onchange: EmailFieldEvents['onChange'];
    onfocus: EmailFieldEvents['onFocus'];
    oninput: EmailFieldEvents['onInput'];
}
export interface EmailFieldProps extends EmailFieldBaseProps, EmailFieldEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: EmailFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: EmailFieldProps & BaseElementProps<EmailFieldElement>;
        }
    }
}

export type { EmailFieldBaseProps, EmailFieldElement, EmailFieldElementEvents, EmailFieldEvents, EmailFieldProps };
