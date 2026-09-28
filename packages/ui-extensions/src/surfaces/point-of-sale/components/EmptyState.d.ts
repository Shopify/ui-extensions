/** VERSION: undefined **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  EmptyStateProps,
  ComponentChild,
  Key,
  Ref,
} from './components-shared.d.ts';

/**
 * Displays an empty-state message with optional actions and supporting graphics.
 * @publicDocs
 */
export interface EmptyStateJSXProps extends Pick<EmptyStateProps, 'heading'> {
  /**
   * The subheading of the EmptyState.
   */
  subheading?: string;
  /**
   * The primary action to perform, provided as a button or link type element.
   */
  primaryAction?: ComponentChild;
  /**
   * The secondary actions to perform, provided as button or link type elements.
   */
  secondaryActions?: ComponentChild;
  /**
   * The graphic to display in the EmptyState. The only supported component is `Icon`, with a type of `alert-circle`, `search`, or `info`.
   */
  graphic?: ComponentChild;
}

export type ComponentChildren = any;
/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren;
}
export type IntrinsicElementProps<T> = T &
  BaseElementPropsWithChildren<T & HTMLElement>;
export type HtmlElementTagNameProps<T> = T & HTMLElement;

declare const tagName = 's-empty-state';
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<EmptyStateJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<EmptyStateJSXProps>;
    }
  }
}

export {tagName};
export type {EmptyStateJSXProps};
