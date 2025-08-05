/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  TextProps,
  ComponentChildren$1,
  Key,
  Ref,
} from './components-shared.d.ts';

type ComponentChildren = ComponentChildren$1;
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
  children?: ComponentChildren$1;
}

declare const tagName = 's-text';
type AlignedProps = Pick<TextProps, 'tone' | 'type'>;
export interface TextJSXProps extends AlignedProps {
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
