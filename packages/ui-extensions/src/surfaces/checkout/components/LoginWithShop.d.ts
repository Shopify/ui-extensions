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

/**
 * The base properties for elements that don't have children, providing essential attributes like keys and refs for component management.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    /**
     * A unique identifier for this element within its parent. Used by the rendering engine for efficient reconciliation when lists change.
     */
    key?: preact.Key;
    /**
     * A reference to the underlying DOM element, typically created using `useRef()`. This allows you to access and manipulate the DOM element directly in your component logic.
     */
    ref?: preact.Ref<TClass>;
    /**
     * Assigns this element to a named slot in a parent component that uses slot-based composition patterns.
     */
    slot?: Lowercase<string>;
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

declare const tagName = "s-login-with-shop";
/** @private */
export interface LoginWithShopStatusChangeEvent {
    /**
     * The buyer's Shop Pay state in this checkout.
     *
     * - `shop_pay`: The buyer is signed in to Shop Pay.
     * - `shop_pay_guest`: The buyer is in Shop Pay but isn't signed in.
     * - `guest`: The buyer isn't using Shop Pay, so the modal can be shown.
     * - `shop_pay_skipped`: The Shop Pay modal is suppressed for this checkout and isn't shown.
     */
    status?: 'shop_pay' | 'guest' | 'shop_pay_skipped' | 'shop_pay_guest';
}
/** @private */
export interface LoginWithShopElementProps {
    /**
     * Whether the modal is visible to the buyer.
     *
     * The modal doesn't hide itself when the buyer dismisses it. Update this to `false` when the `closed` event fires to keep it in sync.
     *
     * @default false
     */
    open?: boolean;
    /**
     * Whether to send the buyer to Shop Pay immediately, without showing the modal.
     *
     * @default false
     */
    doRedirect?: boolean;
    /**
     * The heading shown at the top of the modal.
     *
     * This is also the modal's accessible name and the alternative text for `modalLogoSrc`.
     *
     * @default ''
     */
    modalTitle?: string;
    /**
     * The text shown below the heading, explaining what the buyer gets by continuing to Shop Pay.
     *
     * @default ''
     */
    modalDescription?: string;
    /**
     * The URL of the image shown above the heading. The image is scaled to a maximum height of 64px.
     *
     * @default ''
     */
    modalLogoSrc?: string;
    /**
     * The label of the primary button that continues to Shop Pay.
     *
     * @default 'Continue'
     */
    modalContinueText?: string;
    /**
     * The label of the secondary button that dismisses the modal.
     *
     * @default ''
     */
    modalCancelText?: string;
}
/** @private */
export interface LoginWithShopEvents {
    /**
     * A callback that's fired when the buyer presses the continue button.
     *
     * Return a promise to do work before the buyer leaves. Checkout keeps the button in its loading state and waits for the promise to settle before redirecting to Shop Pay.
     */
    onComplete?(event: CallbackEvent<typeof tagName>): void | Promise<void>;
    /**
     * A callback that's fired when the buyer dismisses the modal, either with the cancel button or by closing it.
     */
    onClosed?(event: CallbackEvent<typeof tagName>): void;
    /**
     * A callback that's fired when the buyer's Shop Pay state in checkout is determined or changes.
     *
     * Read `event.status` for the new state.
     */
    onStatusChange?(event: CallbackEvent<typeof tagName> & LoginWithShopStatusChangeEvent): void;
}
/** @private */
export interface LoginWithShopElementEvents {
    /**
     * A callback that's fired when the buyer presses the continue button.
     *
     * Checkout redirects to Shop Pay once this event has been handled.
     */
    complete?: CallbackEventListener<typeof tagName>;
    /**
     * A callback that's fired when the buyer dismisses the modal, either with the cancel button or by closing it.
     */
    closed?: CallbackEventListener<typeof tagName>;
    /**
     * A callback that's fired when the buyer's Shop Pay state in checkout is determined or changes.
     *
     * Read `event.status` for the new state.
     */
    statuschange?: CallbackEventListener<typeof tagName, LoginWithShopStatusChangeEvent>;
}
/** @private */
export interface LoginWithShopElement extends LoginWithShopElementProps, HTMLElement {
    oncomplete: LoginWithShopElementEvents['complete'];
    onclosed: LoginWithShopElementEvents['closed'];
    onstatuschange: LoginWithShopElementEvents['statuschange'];
}
/** @private */
export interface LoginWithShopProps extends LoginWithShopElementProps, LoginWithShopEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: LoginWithShopElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: LoginWithShopProps & BaseElementProps<LoginWithShopElement>;
        }
    }
}

export type { LoginWithShopElement, LoginWithShopElementEvents, LoginWithShopElementProps, LoginWithShopEvents, LoginWithShopProps, LoginWithShopStatusChangeEvent };
