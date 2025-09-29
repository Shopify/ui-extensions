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
  PageProps,
  Key,
  Ref,
  ComponentChild,
} from './components-shared.d.ts';

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
export type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T>;

declare const tagName = 's-page';
export interface PageJSXProps extends Pick<PageProps, 'id'> {
  /**
   * The main page heading, displayed in the action bar at the top of the page.
   *
   * @default: ''
   */
  heading?: PageProps['heading'];
  /**
   * A secondary page heading, displayed under the main heading in the action bar.
   */
  subheading?: PageProps['subheading'];
  /**
   * Button element to display in the action bar. Only a single button is supported.
   */
  secondaryActions?: ComponentChild;
  /**
   * Content to display in the page's sidebar.
   */
  aside?: ComponentChild;
  /**
   * The content of the Page.
   */
  children?: ComponentChildren;
}
export type ElementProps = Omit<PageJSXProps, 'secondaryActions' | 'aside'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ElementProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<ElementProps>;
    }
  }
}

export {tagName};
export type {PageJSXProps};
