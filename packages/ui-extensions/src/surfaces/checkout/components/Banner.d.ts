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
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};

declare const tagName = "s-banner";
export interface BannerBaseProps extends Pick<BannerProps$1, 'collapsible' | 'dismissible' | 'heading' | 'hidden' | 'id' | 'tone'> {
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
    afterhide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Event handler when the banner is dismissed by the user.
     *
     * This does not fire when setting `hidden` manually.
     *
     * The `hidden` property will be `false` when this event fires.
     */
    dismiss?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface BannerElement extends BannerBaseProps, Omit<BannerEvents, 'onAfterHide' | 'onDismiss'>, Omit<HTMLElement, 'id' | 'title' | 'hidden'> {
    onafterhide: BannerEvents['onAfterHide'];
    ondismiss: BannerEvents['onDismiss'];
}
export interface BannerProps extends BannerBaseProps, BannerEvents {
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

export type { BannerBaseProps, BannerElement, BannerElementEvents, BannerEvents, BannerProps };
