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

export interface TextAreaProps extends TextAreaProps$1 {
}
export interface TextAreaElement extends Omit<TextAreaProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput'> {
    onblur: TextAreaProps['onBlur'];
    onchange: TextAreaProps['onChange'];
    onfocus: TextAreaProps['onFocus'];
    oninput: TextAreaProps['onInput'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-text-area': TextAreaElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-text-area': TextAreaProps & BaseElementProps<TextAreaElement>;
        }
    }
}

export type { TextAreaElement, TextAreaProps };
