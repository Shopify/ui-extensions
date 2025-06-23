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
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};

declare const tagName = "s-drop-zone";
export interface DropZoneBaseProps extends Pick<DropZoneProps$1, 'accept' | 'accessibilityLabel' | 'disabled' | 'error' | 'id' | 'label' | 'multiple' | 'name' | 'required'> {
}
export interface DropZoneEvents extends Pick<DropZoneProps$1, 'onDropRejected' | 'onInput'> {
}
export interface DropZoneElementEvents {
    droprejected?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    input?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface DropZoneElement extends DropZoneBaseProps, Omit<DropZoneEvents, 'onDropRejected' | 'onInput'>, Omit<HTMLElement, 'id' | 'oninput'> {
    ondroprejected: DropZoneEvents['onDropRejected'];
    oninput: DropZoneEvents['onInput'];
}
export interface DropZoneProps extends DropZoneBaseProps, DropZoneEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: DropZoneElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: DropZoneProps & BaseElementProps<DropZoneElement>;
        }
    }
}

export type { DropZoneBaseProps, DropZoneElement, DropZoneElementEvents, DropZoneEvents, DropZoneProps };
