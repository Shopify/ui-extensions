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
import type {PaymentIconProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}

declare const tagName = "s-payment-icon";
export interface PaymentIconElementProps extends PaymentIconProps$1 {
}
export interface PaymentIconElement extends PaymentIconElementProps, Omit<HTMLElement, 'id'> {
}
export interface PaymentIconProps extends PaymentIconElementProps {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: PaymentIconElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: PaymentIconProps & BaseElementProps<PaymentIconElement>;
        }
    }
}

export type { PaymentIconElement, PaymentIconElementProps, PaymentIconProps };
