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
import type {ClickableChipProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-clickable-chip";
/**
 * The clickable chip component displays interactive labels or categories that users can click or remove. Use clickable chip to show filter tags, selected options, or merchant-created labels that users need to interact with or dismiss.
 *
 * Clickable chips support multiple visual variants, optional icons, and can function as both clickable buttons and removable tags for flexible interaction patterns. For non-interactive labels, use [chip](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/typography-and-content/chip).
 * @publicDocs
 */
export interface ClickableChipElementProps extends Pick<ClickableChipProps$1, 'accessibilityLabel' | 'disabled' | 'hidden' | 'href' | 'id' | 'removable'> {
}
/** @publicDocs */
export interface ClickableChipEvents extends Pick<ClickableChipProps$1, 'onAfterHide' | 'onClick' | 'onRemove'> {
}
/**
 * Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).
 * @publicDocs
 */
export interface ClickableChipElementEvents {
    /**
     * Event handler when the chip has fully hidden.
     *
     * The `hidden` property will be `true` when this event fires.
     */
    afterhide?: CallbackEventListener<typeof tagName>;
    /**
     * Event handler when the chip is clicked.
     */
    click?: CallbackEventListener<typeof tagName>;
    /**
     * Event handler when the chip is removed.
     */
    remove?: CallbackEventListener<typeof tagName>;
}
/**
 * Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).
 * @publicDocs
 */
export interface ClickableChipElementSlots {
    /**
     * The graphic to display inside of the chip.
     *
     * Only `s-icon` element and its `type` attribute are supported.
     */
    graphic?: HTMLElement;
}
/** @publicDocs */
export interface ClickableChipElement extends ClickableChipElementProps, Omit<HTMLElement, 'id' | 'hidden' | 'onclick'> {
    onafterhide: ClickableChipEvents['onAfterHide'];
    onclick: ClickableChipEvents['onClick'];
    onremove: ClickableChipEvents['onRemove'];
}
/** @publicDocs */
export interface ClickableChipProps extends ClickableChipElementProps, ClickableChipEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ClickableChipElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ClickableChipProps & BaseElementPropsWithChildren<ClickableChipElement>;
        }
    }
}

export type { ClickableChipElement, ClickableChipElementEvents, ClickableChipElementProps, ClickableChipElementSlots, ClickableChipEvents, ClickableChipProps };
