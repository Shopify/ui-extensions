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
import type {LinkProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-link";
/**
 * The link component makes text interactive, allowing users to navigate to other pages or perform specific actions. Use link for navigation, external references, or triggering actions while maintaining standard link semantics and accessibility.
 *
 * Links support standard URLs, custom protocols, navigation within Shopify admin pages, and can open in new windows for external destinations. For prominent actions or form submissions, use [button](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/button) instead.
 * @publicDocs
 */
export interface LinkElementProps extends Pick<LinkProps$1, 'accessibilityLabel' | 'command' | 'commandFor' | 'href' | 'id' | 'interestFor' | 'lang' | 'target' | 'tone'> {
    target?: Extract<LinkProps$1['target'], 'auto' | '_blank'>;
    tone?: Extract<LinkProps$1['tone'], 'auto' | 'neutral'>;
}
/** @publicDocs */
export interface LinkEvents extends Pick<LinkProps$1, 'onClick'> {
}
/**
 * Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).
 * @publicDocs
 */
export interface LinkElementEvents {
    /**
     * Callback when the link is activated.
     * This will be called before navigating to the location specified by `href`.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
     */
    click?: CallbackEventListener<typeof tagName>;
}
/** @publicDocs */
export interface LinkElement extends LinkElementProps, Omit<HTMLElement, 'id' | 'lang' | 'onclick'> {
    onclick: LinkEvents['onClick'];
}
/** @publicDocs */
export interface LinkProps extends LinkElementProps, LinkEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: LinkElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: LinkProps & BaseElementPropsWithChildren<LinkElement>;
        }
    }
}

export type { LinkElement, LinkElementEvents, LinkElementProps, LinkEvents, LinkProps };
