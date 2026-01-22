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
import type {BadgeProps$1} from './components-shared.d.ts';

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
/**
 * Used as the single source of truth for checkout icon types.
 *
 * @see https://github.com/Shopify/ui-api-design/blob/main/packages/ui-api-design/src/components/Icon/Icon.ts#L10
 */
declare const CHECKOUT_AVAILABLE_ICONS: readonly ["alert-circle", "alert-triangle-filled", "alert-triangle", "arrow-down", "arrow-left", "arrow-right", "arrow-up-right", "arrow-up", "bag", "bullet", "calendar", "camera", "caret-down", "cart", "cash-dollar", "categories", "check-circle", "check-circle-filled", "check", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "circle", "clipboard", "clock", "credit-card", "delete", "delivered", "delivery", "disabled", "discount", "edit", "email", "empty", "external", "filter", "geolocation", "gift-card", "globe", "grid", "image", "info-filled", "info", "list-bulleted", "location", "lock", "map", "menu-horizontal", "menu-vertical", "menu", "minus", "mobile", "note", "order", "organization", "plus", "profile", "question-circle-filled", "question-circle", "reorder", "reset", "return", "savings", "search", "settings", "star-filled", "star-half", "star", "store", "truck", "upload", "x-circle-filled", "x-circle", "x"];
export type ReducedIconTypes = (typeof CHECKOUT_AVAILABLE_ICONS)[number];

declare const tagName = "s-badge";
export interface BadgeElementProps extends Pick<BadgeProps$1, 'color' | 'icon' | 'iconPosition' | 'id' | 'size' | 'tone'> {
    size?: Extract<BadgeProps$1['size'], 'small' | 'small-100' | 'base'>;
    tone?: Extract<BadgeProps$1['tone'], 'auto' | 'neutral' | 'critical'>;
    color?: Extract<BadgeProps$1['color'], 'base' | 'subdued'>;
    icon?: '' | ReducedIconTypes;
}
export interface BadgeElement extends BadgeElementProps, Omit<HTMLElement, 'id'> {
}
export interface BadgeProps extends BadgeElementProps {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: BadgeElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: BadgeProps & BaseElementPropsWithChildren<BadgeElement>;
        }
    }
}

export type { BadgeElement, BadgeElementProps, BadgeProps };
