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
import type {CheckboxProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-checkbox";
/**
 * The checkbox component provides a clear way for users to make selections, such as agreeing to terms, enabling settings, or choosing multiple items from a list. Use checkbox to create binary on/off controls or multi-select interfaces where users can select any combination of options.
 *
 * Checkboxes support labels, help text, error states, and an indeterminate state for "select all" functionality when working with grouped selections. For settings that take effect immediately, use [switch](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/switch) instead.
 * @publicDocs
 */
export interface CheckboxElementProps extends Pick<CheckboxProps$1, 'accessibilityLabel' | 'checked' | 'command' | 'commandFor' | 'defaultChecked' | 'disabled' | 'error' | 'id' | 'label' | 'name' | 'required' | 'value'> {
    command?: Extract<CheckboxProps$1['command'], '--auto' | '--show' | '--hide' | '--toggle'>;
}
/** @publicDocs */
export interface CheckboxEvents extends Pick<CheckboxProps$1, 'onChange'> {
}
/**
 * Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).
 * @publicDocs
 */
export interface CheckboxElementEvents {
    /**
     * A callback that is run whenever the control is changed.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    change?: CallbackEventListener<typeof tagName>;
}
/** @publicDocs */
export interface CheckboxElement extends CheckboxElementProps, Omit<HTMLElement, 'id' | 'onchange'> {
    onchange: CheckboxEvents['onChange'];
}
/** @publicDocs */
export interface CheckboxProps extends CheckboxElementProps, CheckboxEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: CheckboxElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: CheckboxProps & BaseElementProps<CheckboxElement>;
        }
    }
}

export type { CheckboxElement, CheckboxElementEvents, CheckboxElementProps, CheckboxEvents, CheckboxProps };
