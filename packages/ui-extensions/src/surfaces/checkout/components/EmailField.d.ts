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

export interface EmailFieldProps extends EmailFieldProps$1 {
}
export interface EmailFieldElement extends Omit<EmailFieldProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: EmailFieldProps['onBlur'];
    onchange: EmailFieldProps['onChange'];
    onfocus: EmailFieldProps['onFocus'];
    oninput: EmailFieldProps['onInput'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-email-field': EmailFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-email-field': EmailFieldProps & BaseElementProps<EmailFieldElement>;
        }
    }
}

export type { EmailFieldElement, EmailFieldProps };
