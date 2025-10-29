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
import type {PopoverProps$1,SizeUnitsOrAuto, SizeUnitsOrNone, SizeUnits} from './components-shared.d.ts';

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

declare const tagName = "s-popover";
export interface PopoverElementProps extends Pick<PopoverProps$1, 'id'> {
    /**
     * Adjust the block size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
     *
     * @default 'auto'
     */
    blockSize?: SizeUnitsOrAuto;
    /**
     * Adjust the inline size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
     *
     * @default 'auto'
     */
    inlineSize?: SizeUnitsOrAuto;
    /**
     * Adjust the maximum block size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
     *
     * @default 'none'
     */
    maxBlockSize?: SizeUnitsOrNone;
    /**
     * Adjust the maximum inline size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
     *
     * @default 'none'
     */
    maxInlineSize?: SizeUnitsOrNone;
    /**
     * Adjust the minimum block size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
     *
     * @default '0'
     */
    minBlockSize?: SizeUnits;
    /**
     * Adjust the minimum inline size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
     *
     * @default '0'
     */
    minInlineSize?: SizeUnits;
}
export interface PopoverEvents extends Pick<PopoverProps$1, 'onHide' | 'onShow'> {
}
export interface PopoverElementEvents {
    /**
     * Callback fired after the overlay is hidden.
     */
    hide?: CallbackEventListener<typeof tagName>;
    /**
     * Callback fired after the overlay is shown.
     */
    show?: CallbackEventListener<typeof tagName>;
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
