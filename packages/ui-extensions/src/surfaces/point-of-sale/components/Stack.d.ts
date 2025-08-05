/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  StackProps,
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

declare const tagName = 's-stack';
type AlignedProps = Pick<
  StackProps,
  | 'id'
  | 'accessibilityLabel'
  | 'alignItems'
  | 'alignContent'
  | 'gap'
  | 'background'
  | 'blockSize'
  | 'border'
  | 'borderColor'
  | 'borderRadius'
  | 'borderStyle'
  | 'borderWidth'
  | 'columnGap'
  | 'direction'
  | 'inlineSize'
  | 'justifyContent'
  | 'maxBlockSize'
  | 'maxInlineSize'
  | 'minBlockSize'
  | 'minInlineSize'
  | 'overflow'
  | 'padding'
  | 'paddingBlock'
  | 'paddingBlockStart'
  | 'paddingBlockEnd'
  | 'paddingInline'
  | 'paddingInlineStart'
  | 'paddingInlineEnd'
  | 'rowGap'
>;
export interface StackJSXProps extends AlignedProps {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: StackJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<StackJSXProps>;
    }
  }
}

export {tagName};
export type {StackJSXProps};
