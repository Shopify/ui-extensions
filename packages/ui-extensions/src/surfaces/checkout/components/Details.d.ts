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
import type {DetailsProps$1} from './components-shared.d.ts';

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
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = (EventListener & {
    (event: CallbackEvent<TTagName, TEvent>): void;
}) | null;

declare const tagName = "s-details";
export interface DetailsElementProps extends Pick<DetailsProps$1, 'defaultOpen' | 'open' | 'id' | 'toggleTransition'> {
}
export interface DetailsEvents extends Pick<DetailsProps$1, 'onToggle'> {
}
export interface DetailsElementEvents {
    /**
     * Callback straight after the element state changes.
     *
     * - If the element is transitioning from hidden to showing, the `oldState` property will be set to `closed` and the
     *   `newState` property will be set to `open`.
     * - If the element is transitioning from showing to hidden, then `oldState` property will be set to `open` and the
     *   `newState` will be `closed`.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState
     */
    toggle?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
}
export interface DetailsElement extends Omit<HTMLElement, 'ontoggle' | 'id'> {
    ontoggle: DetailsEvents['onToggle'];
}
export interface DetailsProps extends DetailsElementProps, DetailsEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: DetailsElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: DetailsProps & BaseElementPropsWithChildren<DetailsElement>;
        }
    }
}

export type { DetailsElement, DetailsElementEvents, DetailsElementProps, DetailsEvents, DetailsProps };
