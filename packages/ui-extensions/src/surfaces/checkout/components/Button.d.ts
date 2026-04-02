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
import type {ButtonProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-button";
/**
 * The button component triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use buttons to let users perform specific tasks or initiate interactions throughout the interface.
 *
 * Buttons support various visual styles, tones, and interaction patterns to communicate intent and hierarchy. They can also function as links, guiding users to internal or external destinations. For navigation-focused interactions within text, use [link](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/link). For grouping multiple related buttons, use [button group](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/button-group).
 * @publicDocs
 */
export interface ButtonElementProps extends Pick<ButtonProps$1, 'accessibilityLabel' | 'command' | 'commandFor' | 'disabled' | 'href' | 'id' | 'inlineSize' | 'interestFor' | 'loading' | 'target' | 'tone' | 'type' | 'variant'> {
    target?: Extract<ButtonProps$1['target'], 'auto' | '_blank'>;
    tone?: Extract<ButtonProps$1['tone'], 'auto' | 'neutral' | 'critical'>;
    type?: Extract<ButtonProps$1['type'], 'submit' | 'button'>;
    variant?: Extract<ButtonProps$1['variant'], 'auto' | 'primary' | 'secondary'>;
}
/** @publicDocs */
export interface ButtonEvents extends Pick<ButtonProps$1, 'onClick'> {
}
/**
 * The button component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface ButtonElementEvents {
    /**
     * A callback fired when the button is clicked. This will be called before the action indicated by `type`.
     *
     * Learn more about the [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
     */
    click?: CallbackEventListener<typeof tagName>;
}
/** @publicDocs */
export interface ButtonElement extends ButtonElementProps, Omit<HTMLElement, 'id' | 'onclick'> {
    onclick: ButtonEvents['onClick'];
}
/** @publicDocs */
export interface ButtonProps extends ButtonElementProps, ButtonEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ButtonElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ButtonProps & BaseElementPropsWithChildren<ButtonElement>;
        }
    }
}

export type { ButtonElement, ButtonElementEvents, ButtonElementProps, ButtonEvents, ButtonProps };
