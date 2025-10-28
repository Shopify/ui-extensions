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
import type {QRCodeProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-qr-code";
export interface QRCodeElementProps extends QRCodeProps$1 {
}
export interface QRCodeEvents extends Pick<QRCodeProps$1, 'onError'> {
}
export interface QRCodeElementEvents {
    /**
     * Invoked when the conversion of `content` to a QR code fails.
     * If an error occurs, the QR code and its child elements will not be displayed.
     */
    error?: CallbackEventListener<typeof tagName>;
}
export interface QRCodelement extends QRCodeElementProps, Omit<HTMLElement, 'id' | 'onerror'> {
    onerror: QRCodeEvents['onError'];
}
export interface QRCodeProps extends QRCodeElementProps, QRCodeEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: QRCodelement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: QRCodeProps & BaseElementProps<QRCodelement>;
        }
    }
}

export type { QRCodeElementEvents, QRCodeElementProps, QRCodeEvents, QRCodeProps, QRCodelement };
