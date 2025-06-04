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
import type {DropZoneProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}

export interface DropZoneProps extends Pick<DropZoneProps$1, 'accept' | 'accessibilityLabel' | 'disabled' | 'error' | 'id' | 'label' | 'multiple' | 'name' | 'onDropRejected' | 'onInput' | 'required'> {
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
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-drop-zone': DropZoneProps & BaseElementProps<DropZoneElement>;
        }
    }
}

export type { DropZoneElement, DropZoneProps };
