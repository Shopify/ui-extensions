/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {PaymentIconProps$1} from './components-shared.d.ts';

export interface PaymentIconProps extends PaymentIconProps$1 {
}
export interface PaymentIconElement extends PaymentIconProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-payment-icon': PaymentIconElement;
    }
}
declare module 'preact' {
    interface BaseProps {
        slot?: Lowercase<string>;
    }
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-payment-icon': PaymentIconProps & BaseProps;
        }
    }
}

export type { PaymentIconElement, PaymentIconProps };
