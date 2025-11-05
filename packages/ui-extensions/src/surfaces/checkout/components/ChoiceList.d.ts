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
import type {ChoiceListProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-choice-list";
export interface ChoiceListElementProps extends Pick<ChoiceListProps$1, 'disabled' | 'error' | 'id' | 'label' | 'labelAccessibilityVisibility' | 'multiple' | 'name' | 'values' | 'variant'> {
}
export interface ChoiceListEvents extends Pick<ChoiceListProps$1, 'onChange'> {
}
export interface ChoiceListElementEvents {
    /**
     * A callback that is run whenever the control is changed.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    change?: CallbackEventListener<typeof tagName>;
}
export interface ChoiceListElement extends ChoiceListElementProps, Omit<HTMLElement, 'id' | 'onchange'> {
    onchange: ChoiceListEvents['onChange'];
}
export interface ChoiceListProps extends ChoiceListElementProps, ChoiceListEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ChoiceListElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ChoiceListProps & BaseElementPropsWithChildren<ChoiceListElement>;
        }
    }
}

export type { ChoiceListElement, ChoiceListElementEvents, ChoiceListElementProps, ChoiceListEvents, ChoiceListProps };
