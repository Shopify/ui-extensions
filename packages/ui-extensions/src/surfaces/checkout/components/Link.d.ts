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
import type {LinkProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-link";
export interface LinkElementProps extends Pick<LinkProps$1, 'accessibilityLabel' | 'command' | 'commandFor' | 'href' | 'id' | 'interestFor' | 'lang' | 'target' | 'tone'> {
    target?: Extract<LinkProps$1['target'], 'auto' | '_blank'>;
    tone?: Extract<LinkProps$1['tone'], 'auto' | 'neutral'>;
}
export interface LinkEvents extends Pick<LinkProps$1, 'onClick'> {
}
export interface LinkElementEvents {
    /**
     * Callback when the link is activated.
     * This will be called before navigating to the location specified by `href`.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
     */
    click?: CallbackEventListener<typeof tagName>;
}
export interface LinkElement extends LinkElementProps, Omit<HTMLElement, 'id' | 'lang' | 'onclick'> {
    onclick: LinkEvents['onClick'];
}
export interface LinkProps extends LinkElementProps, LinkEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: LinkElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: LinkProps & BaseElementPropsWithChildren<LinkElement>;
        }
    }
}

export type { LinkElement, LinkElementEvents, LinkElementProps, LinkEvents, LinkProps };
