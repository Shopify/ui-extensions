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
import type {FormProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: preact.ComponentChildren;
}
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};

declare const tagName = "s-form";
export interface FormBaseProps extends Pick<FormProps$1, 'id' | 'disabled'> {
}
export interface FormEvents extends Pick<FormProps$1, 'onSubmit'> {
    onSubmit?: () => void;
}
export interface FormElementEvents {
    submit?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface FormElement extends Omit<FormBaseProps, 'children'>, Omit<FormEvents, 'onSubmit'>, Omit<HTMLElement, 'id' | 'onsubmit'> {
    onsubmit: FormEvents['onSubmit'];
}
export interface FormProps extends FormBaseProps, FormEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: FormElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: FormProps & BaseElementPropsWithChildren<FormElement>;
        }
    }
}

export type { FormBaseProps, FormElement, FormElementEvents, FormEvents, FormProps };
