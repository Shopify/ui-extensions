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
import type {ClipboardItemProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-clipboard-item";
export interface ClipboardItemBaseProps extends Pick<ClipboardItemProps$1, 'id' | 'text'> {
}
export interface ClipboardItemEvents extends Pick<ClipboardItemProps$1, 'onCopy' | 'onCopyError'> {
}
export interface ClipboardItemElementEvents {
    copy?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    copyerror?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface ClipboardItemElement extends ClipboardItemBaseProps, Omit<ClipboardItemEvents, 'onCopy' | 'onCopyError'>, Omit<HTMLElement, 'id' | 'oncopy'> {
    oncopy: ClipboardItemEvents['onCopy'];
    oncopyerror: ClipboardItemEvents['onCopyError'];
}
export interface ClipboardItemProps extends ClipboardItemBaseProps, ClipboardItemEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ClipboardItemElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ClipboardItemProps & BaseElementProps<ClipboardItemElement>;
        }
    }
}

export type { ClipboardItemBaseProps, ClipboardItemElement, ClipboardItemElementEvents, ClipboardItemEvents, ClipboardItemProps };
