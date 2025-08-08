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
import type {TextProps, Key, Ref} from './components-shared.d.ts';

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

declare const tagName = 's-text';
export interface TextJSXProps extends Pick<TextProps, 'tone' | 'type'> {
  color?: 'subdued' | 'base' | 'strong';
  type?: Extract<TextProps['type'], 'emphasis' | 'strong' | 'small' | 'offset'>;
  tone?: Extract<
    TextProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical'
  >;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TextJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<TextJSXProps>;
    }
  }
}

export {tagName};
export type {TextJSXProps};
