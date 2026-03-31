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
import type {SwitchProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-switch";
/**
 * The switch component provides a clear way for users to toggle options or settings on and off. Use switch for binary controls that take effect immediately, like enabling features, activating settings, or controlling visibility.
 *
 * Switches provide instant visual feedback and are ideal for settings that don't require a save action to apply changes. For selections that require explicit submission, use [checkbox](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/checkbox) instead.
 * @publicDocs
 */
export interface SwitchElementProps extends Pick<SwitchProps$1, 'accessibilityLabel' | 'checked' | 'command' | 'commandFor' | 'defaultChecked' | 'disabled' | 'id' | 'label' | 'name' | 'value'> {
    command?: Extract<SwitchProps$1['command'], '--auto' | '--show' | '--hide' | '--toggle'>;
}
/** @publicDocs */
export interface SwitchEvents extends Pick<SwitchProps$1, 'onChange'> {
}
/**
 * Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).
 * @publicDocs
 */
export interface SwitchElementEvents {
    /**
     * A callback that is run whenever the control is changed.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    change?: CallbackEventListener<typeof tagName>;
}
/** @publicDocs */
export interface SwitchElement extends SwitchElementProps, Omit<HTMLElement, 'id' | 'onchange'> {
    onchange: SwitchEvents['onChange'];
}
/** @publicDocs */
export interface SwitchProps extends SwitchElementProps, SwitchEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: SwitchElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: SwitchProps & BaseElementProps<SwitchElement>;
        }
    }
}

export type { SwitchElement, SwitchElementEvents, SwitchElementProps, SwitchEvents, SwitchProps };
