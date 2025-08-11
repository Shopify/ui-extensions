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
import { ReactNode } from 'react';

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
export interface SheetEvents extends Pick<SheetProps$1, 'onHide' | 'onShow' | 'onAfterHide' | 'onAfterShow'> {
}
export interface SheetElementEvents {
    /**
     * Callback fired after the overlay is hidden.
     */
    hide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Callback fired after the overlay is shown.
     */
    show?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface SheetSlots {
    /**
     * The primary action to perform, provided as a button type element.
     */
    primaryAction?: ReactNode;
    /**
     * The secondary actions to perform, provided as a button type element.
     */
    secondaryActions?: ReactNode;
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
export interface SheetElement extends SheetElementProps, SheetSlots, Omit<HTMLElement, 'id'> {
    onhide: SheetEvents['onHide'];
    onshow: SheetEvents['onShow'];
}
export interface SheetProps extends SheetElementProps, SheetEvents, SheetSlots {
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

export type { SheetElement, SheetElementEvents, SheetElementProps, SheetElementSlots, SheetEvents, SheetProps, SheetSlots };
