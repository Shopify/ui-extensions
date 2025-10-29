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
import type {ButtonProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-button";
export interface ButtonElementProps extends Pick<ButtonProps$1, 'accessibilityLabel' | 'command' | 'commandFor' | 'disabled' | 'href' | 'id' | 'inlineSize' | 'interestFor' | 'loading' | 'target' | 'tone' | 'type' | 'variant'> {
    target?: Extract<ButtonProps$1['target'], 'auto' | '_blank'>;
    tone?: Extract<ButtonProps$1['tone'], 'auto' | 'neutral' | 'critical'>;
    type?: Extract<ButtonProps$1['type'], 'submit' | 'button'>;
    variant?: Extract<ButtonProps$1['variant'], 'auto' | 'primary' | 'secondary'>;
}
export interface ButtonEvents extends Pick<ButtonProps$1, 'onClick'> {
}
export interface ButtonElementEvents {
    /**
     * Callback when the button is activated.
     * This will be called before the action indicated by `type`.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
     */
    click?: CallbackEventListener<typeof tagName>;
}
export interface ButtonElement extends ButtonElementProps, Omit<HTMLElement, 'id' | 'onclick'> {
    onclick: ButtonEvents['onClick'];
}
export interface ButtonProps extends ButtonElementProps, ButtonEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ButtonElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ButtonProps & BaseElementPropsWithChildren<ButtonElement>;
        }
    }
}

export type { ButtonElement, ButtonElementEvents, ButtonElementProps, ButtonEvents, ButtonProps };
