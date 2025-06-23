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
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};

declare const tagName = "s-checkbox";
export interface CheckboxBaseProps extends Pick<CheckboxProps$1, 'accessibilityLabel' | 'checked' | 'command' | 'commandFor' | 'defaultChecked' | 'disabled' | 'error' | 'id' | 'label' | 'name' | 'required' | 'value'> {
}
export interface CheckboxEvents extends Pick<CheckboxProps$1, 'onChange'> {
}
export interface CheckboxElementEvents {
    change?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface CheckboxElement extends CheckboxBaseProps, Omit<CheckboxEvents, 'onChange'>, Omit<HTMLElement, 'id' | 'onchange'> {
    onchange: CheckboxEvents['onChange'];
}
export interface CheckboxProps extends CheckboxBaseProps, CheckboxEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: CheckboxElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: CheckboxProps & BaseElementProps<CheckboxElement>;
        }
    }
}

export type { CheckboxBaseProps, CheckboxElement, CheckboxElementEvents, CheckboxEvents, CheckboxProps };
