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

export interface NumberFieldProps extends NumberFieldProps$1 {
}
export interface NumberFieldElement extends Omit<NumberFieldProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>, Omit<HTMLElement, 'id' | 'inputMode' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'> {
    onblur: NumberFieldProps['onBlur'];
    onchange: NumberFieldProps['onChange'];
    onfocus: NumberFieldProps['onFocus'];
    oninput: NumberFieldProps['onInput'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-number-field': NumberFieldElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-number-field': NumberFieldProps & BaseElementProps<NumberFieldElement>;
        }
    }
}

export type { NumberFieldElement, NumberFieldProps };
