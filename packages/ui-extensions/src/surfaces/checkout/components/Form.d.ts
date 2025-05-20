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

export interface FormProps extends Pick<FormProps$1, 'id' | 'disabled' | 'onSubmit'> {
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
    interface BaseProps {
        children?: preact.ComponentChildren;
        slot?: Lowercase<string>;
    }
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-form': FormProps & BaseProps;
        }
    }
}

export type { FormElement, FormProps };
