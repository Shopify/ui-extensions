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
import type {SheetProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-sheet";
export interface SheetElementProps extends Pick<SheetProps$1, 'defaultOpen' | 'heading' | 'id'> {
    /**
     * A label that describes the purpose of the modal. When set,
     * it will be announced to users using assistive technologies and will
     * provide them with more context.
     *
     * This overrides the `heading` prop for screen readers.
     */
    accessibilityLabel?: string;
}
export interface SheetEvents extends Pick<SheetProps$1, 'onAfterHide' | 'onAfterShow' | 'onHide' | 'onShow'> {
}
export interface SheetElementEvents {
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
export interface SheetElementSlots {
    /**
     * The primary action to perform, provided as a button type element.
     */
    'primary-action'?: HTMLElement;
    /**
     * The secondary actions to perform, provided as a button type element.
     */
    'secondary-actions'?: HTMLElement;
}
export interface SheetElementMethods extends Pick<SheetProps$1, 'hideOverlay'> {
}
export interface SheetElement extends SheetElementProps, SheetElementMethods, Omit<HTMLElement, 'id'> {
    afterhide: SheetEvents['onAfterHide'];
    aftershow: SheetEvents['onAfterShow'];
    onhide: SheetEvents['onHide'];
    onshow: SheetEvents['onShow'];
    onafterhide: SheetEvents['onAfterHide'];
    onaftershow: SheetEvents['onAfterShow'];
}
export interface SheetProps extends SheetElementProps, SheetEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: SheetElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: SheetProps & BaseElementPropsWithChildren<SheetElement>;
        }
    }
}

export type { SheetElement, SheetElementEvents, SheetElementProps, SheetElementSlots, SheetEvents, SheetProps };
