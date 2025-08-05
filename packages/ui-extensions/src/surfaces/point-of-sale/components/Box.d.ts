/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  BoxProps,
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

declare const tagName = 's-box';
type AlignedProps = Pick<
  BoxProps,
  | 'id'
  | 'padding'
  | 'paddingBlock'
  | 'paddingBlockStart'
  | 'paddingBlockEnd'
  | 'paddingInline'
  | 'paddingInlineStart'
  | 'paddingInlineEnd'
  | 'blockSize'
  | 'minBlockSize'
  | 'maxBlockSize'
  | 'inlineSize'
  | 'minInlineSize'
  | 'maxInlineSize'
  | 'accessibilityRole'
  | 'accessibilityLabel'
  | 'border'
  | 'borderColor'
  | 'borderRadius'
  | 'borderWidth'
  | 'background'
>;
export interface BoxJSXProps extends AlignedProps {
  children?: ComponentChildren;
  overflow?: Extract<BoxProps['overflow'], 'hidden' | 'visible'>;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: BoxJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<BoxJSXProps>;
    }
  }
}

export {tagName};
export type {BoxJSXProps};
