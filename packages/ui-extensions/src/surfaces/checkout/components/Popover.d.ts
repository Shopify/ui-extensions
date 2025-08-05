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
import type {PopoverProps$1} from './components-shared.d.ts';

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
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = (EventListener & {
    (event: CallbackEvent<TTagName, TEvent>): void;
}) | null;

declare const tagName = "s-popover";
export interface PopoverElementProps extends Pick<PopoverProps$1, 'blockSize' | 'id' | 'inlineSize' | 'maxBlockSize' | 'maxInlineSize' | 'minBlockSize' | 'minInlineSize'> {
}
export interface PopoverEvents extends Pick<PopoverProps$1, 'onHide' | 'onShow'> {
}
export interface PopoverElementEvents {
    /**
     * Callback fired after the overlay is hidden.
     */
    hide?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
    /**
     * Callback fired after the overlay is shown.
     */
    show?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
}
export interface PopoverElement extends Omit<PopoverProps, 'onHide' | 'onShow'>, Omit<HTMLElement, 'id'> {
    onhide: PopoverProps['onHide'];
    onshow: PopoverProps['onShow'];
}
export interface PopoverProps extends PopoverElementProps, PopoverEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: PopoverElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: PopoverProps & BaseElementPropsWithChildren<PopoverElement>;
        }
    }
}

export type { PopoverElement, PopoverElementEvents, PopoverElementProps, PopoverEvents, PopoverProps };
