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
import type {UnorderedListProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-unordered-list";
/**
 * The unordered list component displays a bulleted list of related items where sequence isn't critical. Use unordered list to present collections of features, options, requirements, or any group of items where order doesn't affect meaning.
 *
 * Unordered lists automatically add bullet points and support nested lists for hierarchical content organization. For sequential items where order is important, use [ordered list](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/ordered-list).
 * @publicDocs
 */
export interface UnorderedListProps extends UnorderedListProps$1 {
}
/** @publicDocs */
export interface UnorderedListElement extends UnorderedListProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: UnorderedListElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: UnorderedListProps & BaseElementPropsWithChildren<UnorderedListElement>;
        }
    }
}

export type { UnorderedListElement, UnorderedListProps };
