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

declare const tagName = 's-page';
export type PickedProps = Pick<
  PageProps,
  'heading' | 'subheading' | 'secondaryActions'
>;
export interface PageJSXProps extends PickedProps {
  children?: ComponentChildren;
  secondaryActions?: ComponentChild;
  primaryAction?: ComponentChild;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: PageJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<PageJSXProps>;
    }
  }
}

export {tagName};
export type {PageJSXProps};
