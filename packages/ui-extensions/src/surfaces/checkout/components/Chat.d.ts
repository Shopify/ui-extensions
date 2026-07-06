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
import type {ChatProps$1} from './components-shared.d.ts';

/**
 * The base properties for elements that don't have children, providing essential attributes like keys and refs for component management.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    /**
     * A unique identifier for this element within its parent. This is used by the rendering engine for efficient reconciliation when lists change.
     */
    key?: preact.Key;
    /**
     * A reference to the underlying DOM element, typically created using `useRef()`. This allows you to access and manipulate the DOM element directly in your component logic.
     */
    ref?: preact.Ref<TClass>;
    /**
     * Assigns the element to a named slot in a parent component that uses slot-based composition patterns.
     */
    slot?: Lowercase<string>;
}
/**
 * The base properties for elements that have children, extending `BaseElementProps` with children support.
 * @publicDocs
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    /**
     * The child elements to render within this component.
     */
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
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & ((event: CallbackEvent<TTagName, Event> & TData) => void)) | null;

declare const tagName = "s-chat";
/** @publicDocs */
export interface ChatElementProps extends Pick<ChatProps$1, 'accessibilityLabel' | 'blockSize' | 'id' | 'inlineSize'> {
    /**
     * A label that describes the purpose of the chat, announced by assistive technologies like screen readers.
     */
    accessibilityLabel?: ChatProps$1['accessibilityLabel'];
    /**
     * Adjust the block size.
     *
     * Checkout imposes [sizing restrictions](/docs/apps/build/checkout/chat#component-states) for the component, therefore the size set may not be the actual size rendered.
     *
     * Learn more about [block size on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
     */
    blockSize?: Extract<ChatProps$1['blockSize'], `${number}px` | '0'>;
    /**
     * Adjust the inline size.
     *
     * Checkout imposes [sizing restrictions](/docs/apps/build/checkout/chat#component-states) for the component, therefore the size set may not be the actual size rendered.
     *
     * Learn more about [inline size on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
     */
    inlineSize?: Extract<ChatProps$1['inlineSize'], `${number}px` | '0'>;
}
/**
 * The event callbacks for monitoring the chat lifecycle.
 */
export interface ChatEvents extends Pick<ChatProps$1, 'onReady'> {
}
/** @publicDocs */
export interface ChatElementEvents {
    /**
     * A callback that fires when the embedded page is ready and a message port has been created to communicate with the host page.
     */
    ready?: CallbackEventListener<typeof tagName>;
}
/** @publicDocs */
export interface ChatElementMethods {
    /**
     * Returns an object exposing a `postMessage` method used to send messages to the embedded page rendered inside the chat iframe. Pair this with the `ready` event (or `onReady` callback) to know when the message channel is available.
     */
    readonly contentWindow: {
        postMessage(message: any): void;
    };
}
/** @publicDocs */
export interface ChatElement extends ChatElementProps, ChatElementMethods, Omit<HTMLElement, 'id' | 'title'> {
    onready: ChatEvents['onReady'];
}
/** @publicDocs */
export interface ChatProps extends ChatElementProps, ChatEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ChatElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ChatProps & BaseElementPropsWithChildren<ChatElement>;
        }
    }
}

export type { ChatElement, ChatElementEvents, ChatElementMethods, ChatElementProps, ChatProps };
