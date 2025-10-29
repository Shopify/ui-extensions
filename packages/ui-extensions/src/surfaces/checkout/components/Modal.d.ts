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
import type {ModalProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: preact.ComponentChildren;
}
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-modal";
export interface ModalElementProps extends Pick<ModalProps$1, 'accessibilityLabel' | 'heading' | 'id' | 'padding' | 'size'> {
    size?: Extract<ModalProps$1['size'], 'small-100' | 'small' | 'base' | 'large-100' | 'large' | 'max'>;
}
export interface ModalElementSlots {
    /**
     * The primary action to perform, provided as a button type element.
     */
    'primary-action'?: HTMLElement;
    /**
     * The secondary actions to perform, provided as button type elements.
     */
    'secondary-actions'?: HTMLElement;
}
export interface ModalEvents extends Pick<ModalProps$1, 'onAfterHide' | 'onAfterShow' | 'onHide' | 'onShow'> {
}
export interface ModalElementMethods extends Pick<ModalProps$1, 'hideOverlay'> {
}
export interface ModalElementEvents {
    /**
     * Callback fired when the overlay is hidden **after** any animations to hide the overlay have finished.
     */
    afterhide?: CallbackEventListener<typeof tagName>;
    /**
     * Callback fired when the overlay is shown **after** any animations to show the overlay have finished.
     */
    aftershow?: CallbackEventListener<typeof tagName>;
    /**
     * Callback fired after the overlay is hidden.
     */
    hide?: CallbackEventListener<typeof tagName>;
    /**
     * Callback fired after the overlay is shown.
     */
    show?: CallbackEventListener<typeof tagName>;
}
export interface ModalElement extends ModalElementProps, ModalElementMethods, Omit<HTMLElement, 'id'> {
    onafterhide: ModalEvents['onAfterHide'];
    onaftershow: ModalEvents['onAfterShow'];
    onhide: ModalEvents['onHide'];
    onshow: ModalEvents['onShow'];
}
export interface ModalProps extends ModalElementProps, ModalEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ModalElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ModalProps & BaseElementPropsWithChildren<ModalElement>;
        }
    }
}

export type { ModalElement, ModalElementEvents, ModalElementProps, ModalElementSlots, ModalProps };
