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
import type {BannerProps$1} from './components-shared.d.ts';

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
/**
 * An event type that narrows the `currentTarget` to the specific HTML element associated with the custom element tag. This provides type-safe event handling in callback listeners.
 */
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
/**
 * A typed event listener for custom element events. The listener receives a `CallbackEvent` with the correct `currentTarget` type for the associated custom element tag.
 */
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-banner";
export interface BannerElementProps extends Pick<BannerProps$1, 'collapsible' | 'dismissible' | 'heading' | 'hidden' | 'id' | 'tone'> {
    tone?: Extract<BannerProps$1['tone'], 'auto' | 'info' | 'success' | 'warning' | 'critical'>;
}
export interface BannerEvents extends Pick<BannerProps$1, 'onAfterHide' | 'onDismiss'> {
}
export interface BannerElementEvents {
    /**
     * Event handler when the banner has fully hidden.
     *
     * The `hidden` property will be `true` when this event fires.
     *
     * @implementation If implementations animate the hiding of the banner,
     * this event must fire after the banner has fully hidden.
     * We can add an `onHide` event in future if we want to provide a hook for the start of the animation.
     */
    afterhide?: CallbackEventListener<typeof tagName>;
    /**
     * Event handler when the banner is dismissed by the user.
     *
     * This does not fire when setting `hidden` manually.
     *
     * The `hidden` property will be `false` when this event fires.
     */
    dismiss?: CallbackEventListener<typeof tagName>;
}
export interface BannerElement extends BannerElementProps, Omit<HTMLElement, 'id' | 'title' | 'hidden'> {
    onafterhide: BannerEvents['onAfterHide'];
    ondismiss: BannerEvents['onDismiss'];
}
export interface BannerProps extends BannerElementProps, BannerEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: BannerElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: BannerProps & BaseElementPropsWithChildren<BannerElement>;
        }
    }
}

export type { BannerElement, BannerElementEvents, BannerElementProps, BannerEvents, BannerProps };
