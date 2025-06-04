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

export interface QRCodeProps extends QRCodeProps$1 {
}
export interface QRCodelement extends Omit<QRCodeProps, 'onError'>, Omit<HTMLElement, 'id' | 'onerror'> {
    onerror: QRCodeProps['onError'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-qr-code': QRCodelement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-qr-code': QRCodeProps & BaseElementProps<QRCodelement>;
        }
    }
}

export type { QRCodeProps, QRCodelement };
