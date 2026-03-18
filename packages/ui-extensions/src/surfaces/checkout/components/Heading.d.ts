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
import type {HeadingProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-heading";
/**
 * The heading component renders hierarchical titles to communicate the structure and organization of page content. Use heading to create section titles and content headers that help users understand information hierarchy and navigate content.
 *
 * Heading levels adjust automatically based on nesting within parent [section](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/section) components, ensuring meaningful and accessible page outlines without manual level management.
 * @publicDocs
 */
export interface HeadingProps extends Pick<HeadingProps$1, 'accessibilityRole' | 'id'> {
}
export interface HeadingElement extends HeadingProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: HeadingElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: HeadingProps & BaseElementPropsWithChildren<HeadingElement>;
        }
    }
}

export type { HeadingElement, HeadingProps };
