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
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-form";
export interface FormElementProps extends Pick<FormProps$1, 'disabled' | 'id'> {
}
export interface FormEvents extends Pick<FormProps$1, 'onSubmit'> {
    /**
     * A callback that is run when the form is submitted.
     */
    onSubmit?: () => void;
}
export interface FormElementEvents {
    /**
     * A callback that is run when the form is submitted.
     */
    submit?: CallbackEventListener<typeof tagName>;
}
export interface FormElement extends FormElementProps, Omit<HTMLElement, 'id' | 'onsubmit'> {
    onsubmit: FormEvents['onSubmit'];
}
export interface FormProps extends FormElementProps, FormEvents {
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

export type { FormElement, FormElementEvents, FormElementProps, FormEvents, FormProps };
