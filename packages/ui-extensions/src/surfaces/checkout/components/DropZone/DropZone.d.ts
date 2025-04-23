/** VERSION: 2025.7.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {DropZoneProps$1} from './components-shared.d.ts';

export interface DropZoneProps extends Omit<DropZoneProps$1, 'onChange' | 'value' | 'labelAccessibilityVisibility'> {
}
export interface DropZoneElement extends Omit<DropZoneProps, 'onDropRejected' | 'onInput'>, Omit<HTMLElement, 'id' | 'oninput'> {
    ondroprejected: DropZoneProps['onDropRejected'];
    oninput: DropZoneProps['onInput'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-drop-zone': DropZoneElement;
    }
}

export type { DropZoneElement, DropZoneProps };
