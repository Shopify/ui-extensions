/** VERSION: 2025.7.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {FormProps$1} from './components-shared.d.ts';

export interface FormProps extends Omit<FormProps$1, 'autocomplete' | 'onReset' | 'onSubmit'> {
    onSubmit?: () => void;
}
export interface FormElement extends Omit<FormProps, 'onSubmit'>, Omit<HTMLElement, 'id' | 'onsubmit'> {
    onsubmit: FormProps['onSubmit'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-form': FormElement;
    }
}

export type { FormElement, FormProps };
