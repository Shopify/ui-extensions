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
import type {SpinnerProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}

declare const tagName = "s-spinner";
export interface SpinnerElementProps extends SpinnerProps$1 {
    size?: Extract<SpinnerProps$1['size'], 'small-100' | 'small' | 'base' | 'large' | 'large-100'>;
}
export interface SpinnerElement extends SpinnerElementProps, Omit<HTMLElement, 'id'> {
}
export interface SpinnerProps extends SpinnerElementProps {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: SpinnerElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: SpinnerProps & BaseElementProps<SpinnerElement>;
        }
    }
}

export type { SpinnerElement, SpinnerElementProps, SpinnerProps };
