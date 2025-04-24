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
import type {ProgressProps$1} from './components-shared.d.ts';

export interface ProgressProps extends Omit<ProgressProps$1, 'tone'> {
    tone?: Extract<ProgressProps$1['tone'], 'auto' | 'critical'>;
}
export interface ProgressElement extends ProgressProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-progress': ProgressElement;
    }
}

export type { ProgressElement, ProgressProps };
