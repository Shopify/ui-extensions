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
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-drop-zone";
export interface DropZoneElementProps extends Pick<DropZoneProps$1, 'accept' | 'accessibilityLabel' | 'disabled' | 'error' | 'id' | 'label' | 'multiple' | 'name' | 'required' | 'value'> {
}
export interface DropZoneEvents extends Pick<DropZoneProps$1, 'onDropRejected' | 'onInput' | 'onChange'> {
}
export interface DropZoneElementEvents {
    /**
     * Callback when rejected files are dropped. Files are rejected based on the `accept` prop.
     */
    droprejected?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the user makes any changes in the field.
     */
    input?: CallbackEventListener<typeof tagName>;
    /**
     * Callback when the user has finished selecting a file or files.
     */
    change?: CallbackEventListener<typeof tagName>;
}
export interface DropZoneElement extends DropZoneElementProps, Omit<HTMLElement, 'id' | 'oninput' | 'onchange'> {
    ondroprejected: DropZoneEvents['onDropRejected'];
    oninput: DropZoneEvents['onInput'];
    onchange: DropZoneEvents['onChange'];
}
export interface DropZoneProps extends DropZoneElementProps, DropZoneEvents {
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

export type { DropZoneElement, DropZoneElementEvents, DropZoneElementProps, DropZoneEvents, DropZoneProps };
