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
import type {OrderedListProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-ordered-list";
/**
 * The ordered list component displays a numbered list of related items in a specific sequence. Use ordered list to present step-by-step instructions, ranked items, procedures, or any content where order and sequence matter to understanding.
 *
 * Ordered lists automatically number items and support nested lists for hierarchical content organization. For items where order doesn't matter, use [unordered list](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/unordered-list).
 * @publicDocs
 */
export interface OrderedListProps extends OrderedListProps$1 {
}
export interface OrderedListElement extends OrderedListProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: OrderedListElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: OrderedListProps & BaseElementPropsWithChildren<OrderedListElement>;
        }
    }
}

export type { OrderedListElement, OrderedListProps };
