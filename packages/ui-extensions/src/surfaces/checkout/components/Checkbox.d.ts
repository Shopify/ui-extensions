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
import type {CheckboxProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}

export interface CheckboxProps extends Pick<CheckboxProps$1, 'accessibilityLabel' | 'checked' | 'command' | 'commandFor' | 'defaultChecked' | 'disabled' | 'error' | 'id' | 'label' | 'name' | 'onChange' | 'required' | 'value'> {
}
export interface CheckboxElement extends Omit<CheckboxProps, 'onChange'>, Omit<HTMLElement, 'id' | 'onchange'> {
    onchange: CheckboxProps['onChange'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-checkbox': CheckboxElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-checkbox': CheckboxProps & BaseElementProps<CheckboxElement>;
        }
    }
}

export type { CheckboxElement, CheckboxProps };
