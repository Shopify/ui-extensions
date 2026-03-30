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
/** @publicDocs */
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
/** @publicDocs */
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-clipboard-item";
/** @publicDocs */
export interface ClipboardItemElementProps extends Pick<ClipboardItemProps$1, 'id' | 'text'> {
}
/** @publicDocs */
export interface ClipboardItemEvents extends Pick<ClipboardItemProps$1, 'onCopy' | 'onCopyError'> {
}
/** @publicDocs */
export interface ClipboardItemElementEvents {
    /**
     * Callback run when the copy to clipboard succeeds.
     */
    copy?: CallbackEventListener<typeof tagName>;
    /**
     * Callback run when the copy to clipboard fails.
     */
    copyerror?: CallbackEventListener<typeof tagName>;
}
/** @publicDocs */
export interface ClipboardItemElement extends ClipboardItemElementProps, Omit<HTMLElement, 'id' | 'oncopy'> {
    oncopy: ClipboardItemEvents['onCopy'];
    oncopyerror: ClipboardItemEvents['onCopyError'];
}
/** @publicDocs */
export interface ClipboardItemProps extends ClipboardItemElementProps, ClipboardItemEvents {
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

export type { ClipboardItemElement, ClipboardItemElementEvents, ClipboardItemElementProps, ClipboardItemEvents, ClipboardItemProps };
