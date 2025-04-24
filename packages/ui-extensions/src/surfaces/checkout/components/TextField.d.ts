/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {TextFieldProps$1} from './components-shared.d.ts';

export interface TextFieldProps extends Omit<TextFieldProps$1, 'icon'> {
}
export interface TextFieldElement extends Omit<TextFieldProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: TextFieldProps['onBlur'];
    onchange: TextFieldProps['onChange'];
    onfocus: TextFieldProps['onFocus'];
    oninput: TextFieldProps['onInput'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-text-field': TextFieldElement;
    }
}

export type { TextFieldElement, TextFieldProps };
