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
  SectionProps,
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

declare const tagName = 's-section';
export interface SectionJSXProps extends Pick<SectionProps, 'children'> {
  secondaryActions?: ComponentChild;
  /**
   * Adds title text displayed at the top left of the section
   *
   * **Mobile surfaces:** Uses the standard POS Design System heading style for a section (not h2).
   *
   * @default undefined
   */
  heading?: string;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: SectionJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<SectionJSXProps>;
    }
  }
}

export {tagName};
export type {SectionJSXProps};
