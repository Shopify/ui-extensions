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
import type {SpinnerProps$1} from './components-shared.d.ts';

export interface SpinnerProps extends Omit<SpinnerProps$1, 'size'> {
    size?: Extract<SpinnerProps$1['size'], 'small-100' | 'small' | 'base' | 'large' | 'large-100'>;
}
export interface SpinnerElement extends SpinnerProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-spinner': SpinnerElement;
    }
}

export type { SpinnerElement, SpinnerProps };
