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

declare const tagName = "s-text-area";
export interface TextAreaBaseProps extends Pick<TextAreaProps$1, 'id' | 'label' | 'name' | 'placeholder' | 'required' | 'value' | 'autocomplete' | 'defaultValue' | 'details' | 'disabled' | 'error' | 'readOnly' | 'rows' | 'maxLength' | 'minLength' | 'labelAccessibilityVisibility'> {
}
export interface TextAreaEvents extends Pick<TextAreaProps$1, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
}
export interface TextAreaElementEvents {
    blur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    change?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    focus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    input?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface TextAreaElement extends TextAreaBaseProps, Omit<TextAreaEvents, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput'> {
    onblur: TextAreaEvents['onBlur'];
    onchange: TextAreaEvents['onChange'];
    onfocus: TextAreaEvents['onFocus'];
    oninput: TextAreaEvents['onInput'];
}
export interface TextAreaProps extends TextAreaBaseProps, TextAreaEvents {
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

export type { TextAreaBaseProps, TextAreaElement, TextAreaElementEvents, TextAreaEvents, TextAreaProps };
