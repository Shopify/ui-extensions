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
 * @publicDocs
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 * @publicDocs
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: preact.ComponentChildren;
}
/**
 * An event type that narrows the `currentTarget` to the specific HTML element associated with the custom element tag. This provides type-safe event handling in callback listeners.
 * @publicDocs
 */
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
/**
 * A typed event listener for custom element events. The listener receives a `CallbackEvent` with the correct `currentTarget` type for the associated custom element tag.
 * @publicDocs
 */
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-choice-list";
/**
 * The choice list component presents multiple options for single or multiple selections. Use it when merchants need to choose from a defined set of options, such as filtering results or collecting preferences.
 *
 * The component supports both single selection (radio button behavior) and multiple selection (checkbox behavior) modes. It includes configurable labels, help text, and validation. For compact dropdown selection with four or more options, use [select](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/select).
 * @publicDocs
 */
export interface ChoiceListElementProps extends Pick<ChoiceListProps$1, 'disabled' | 'error' | 'id' | 'label' | 'labelAccessibilityVisibility' | 'multiple' | 'name' | 'values' | 'variant'> {
}
/** @publicDocs */
export interface ChoiceListEvents extends Pick<ChoiceListProps$1, 'onChange'> {
}
/**
 * Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).
 * @publicDocs
 */
export interface ChoiceListElementEvents {
    /**
     * A callback that is run whenever the control is changed.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    change?: CallbackEventListener<typeof tagName>;
}
/** @publicDocs */
export interface ChoiceListElement extends ChoiceListElementProps, Omit<HTMLElement, 'id' | 'onchange'> {
    onchange: ChoiceListEvents['onChange'];
}
/** @publicDocs */
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
