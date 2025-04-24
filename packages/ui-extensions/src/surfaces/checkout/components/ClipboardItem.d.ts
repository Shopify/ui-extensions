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
import type {ClipboardItemProps$1} from './components-shared.d.ts';

export interface ClipboardItemProps extends ClipboardItemProps$1 {
}
export interface ClipboardItemElement extends Omit<ClipboardItemProps, 'onCopy' | 'onCopyError'>, Omit<HTMLElement, 'id' | 'oncopy'> {
    oncopy: ClipboardItemProps['onCopy'];
    oncopyerror: ClipboardItemProps['onCopyError'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-clipboard-item': ClipboardItemElement;
    }
}

export type { ClipboardItemElement, ClipboardItemProps };
