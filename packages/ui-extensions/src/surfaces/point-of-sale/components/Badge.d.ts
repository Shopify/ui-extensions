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
import type {BadgeProps, Key, Ref} from './components-shared.d.ts';

export type ComponentChildren = any;
/**
 * The base props for elements without children, providing key, ref, and slot properties.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  /**
   * A unique identifier for the element in lists. Used by Preact for efficient rendering and reconciliation.
   */
  key?: Key;
  /**
   * A reference to the underlying DOM element. Commonly used to access the element directly for imperative operations.
   */
  ref?: Ref<TClass>;
  /**
   * The named [slot](/docs/api/app-home/using-polaris-components#slots) this element should be placed in when used within a web component.
   */
  slot?: Lowercase<string>;
}
/**
 * The base props for elements with children, extending `BaseElementProps` with children support.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
export type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T>;

declare const tagName = 's-badge';
export interface BadgeJSXProps extends Pick<BadgeProps, 'id'> {
  /**
   * Determines the visual appearance and semantic meaning of the badge. Available options:
   * - `'auto'` - Lets the system automatically choose the appropriate tone based on context. Typically applied when you want the system to determine the most appropriate styling.
   * - `'neutral'` - Gray styling for general status information that doesn't require emphasis. Commonly used for general status updates and standard information.
   * - `'info'` - Blue styling for informational content and neutral updates. Commonly used for informational content that provides helpful context.
   * - `'success'` - Green styling for positive states, completed actions, and successful operations. Commonly used for positive outcomes and successful processes.
   * - `'caution'` - Yellow styling for situations that need attention but aren't urgent. Commonly used for potential issues that require awareness.
   * - `'warning'` - Orange styling for important notices that require merchant awareness. Commonly used for situations that need attention but aren't critical.
   * - `'critical'` - Red styling for errors, failures, and urgent issues requiring immediate action. Commonly used for urgent issues that need immediate merchant attention.
   *
   * @default 'auto'
   */
  tone?: Extract<
    BadgeProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'caution'
  >;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: BadgeJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<BadgeJSXProps>;
    }
  }
}

export {tagName};
export type {BadgeJSXProps};
