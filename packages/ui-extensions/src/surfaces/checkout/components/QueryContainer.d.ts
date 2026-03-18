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
import type {QueryContainerProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-query-container";
export interface QueryContainerElementProps extends Pick<QueryContainerProps$1, 'containerName' | 'id'> {
}
export interface QueryContainerElement extends QueryContainerElementProps, Omit<HTMLElement, 'id'> {
}
/**
 * The query container component establishes a container query context for responsive design. Use query container to define an element as a containment context, enabling child components or styles to adapt based on the container's size rather than viewport width.
 *
 * Query containers support modern responsive patterns where components respond to their container dimensions, creating more flexible and reusable layouts.
 * @publicDocs
 */
export interface QueryContainerProps extends QueryContainerElementProps {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: QueryContainerElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: QueryContainerProps & BaseElementPropsWithChildren<QueryContainerElement>;
        }
    }
}

export type { QueryContainerElement, QueryContainerElementProps, QueryContainerProps };
