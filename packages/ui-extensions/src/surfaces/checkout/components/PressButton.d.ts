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
import type {PressButtonProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-press-button";
export interface PressButtonElementProps extends Pick<PressButtonProps$1, 'accessibilityLabel' | 'id' | 'inlineSize' | 'lang' | 'disabled' | 'loading' | 'pressed' | 'defaultPressed'> {
}
export interface PressButtonEvents extends Pick<PressButtonProps$1, 'onClick' | 'onBlur' | 'onFocus'> {
}
export interface PressButtonElementEvents {
    /**
     * Callback when the button is activated.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
     */
    click?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the button has lost focus.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
     */
    blur?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the button has received focus.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
     */
    focus?: CallbackEventListener<typeof tagName>;
}
export interface PressButtonElement extends PressButtonElementProps, Omit<HTMLElement, 'children' | 'lang' | 'id' | 'onblur' | 'onclick' | 'onfocus'> {
    onblur: PressButtonEvents['onBlur'];
    onclick: PressButtonEvents['onClick'];
    onfocus: PressButtonEvents['onFocus'];
}
export interface PressButtonProps extends PressButtonElementProps, PressButtonEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: PressButtonElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: PressButtonProps & BaseElementPropsWithChildren<PressButtonElement>;
        }
    }
}

export type { PressButtonElement, PressButtonElementEvents, PressButtonElementProps, PressButtonEvents, PressButtonProps };
