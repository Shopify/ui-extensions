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
import type {FormProps$1} from './components-shared.d.ts';

export interface FormProps extends Omit<FormProps$1, 'autocomplete' | 'children' | 'onReset' | 'onSubmit' | 'containerName' | 'containerType'> {
    onSubmit?: () => void;
}
export interface FormElement extends Omit<FormProps, 'onSubmit' | 'children'>, Omit<HTMLElement, 'id' | 'onsubmit'> {
    onsubmit: FormProps['onSubmit'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-form': FormElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-form': Omit<HTMLAttributes<HTMLElement>, Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>> & FormProps;
        }
    }
}

export type { FormElement, FormProps };
