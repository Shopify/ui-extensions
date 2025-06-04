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

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}

export interface PhoneFieldProps extends PhoneFieldProps$1 {
}
export interface PhoneFieldElement extends Omit<PhoneFieldProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>, Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: PhoneFieldProps['onBlur'];
    onchange: PhoneFieldProps['onChange'];
    onfocus: PhoneFieldProps['onFocus'];
    oninput: PhoneFieldProps['onInput'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-phone-field': PhoneFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-phone-field': PhoneFieldProps & BaseElementProps<PhoneFieldElement>;
        }
    }
}

export type { PhoneFieldElement, PhoneFieldProps };
