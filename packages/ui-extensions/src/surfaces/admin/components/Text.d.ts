/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  TextProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface TextProps
  extends Required<
    Pick<
      TextProps$1,
      | 'accessibilityVisibility'
      | 'dir'
      | 'color'
      | 'type'
      | 'tone'
      | 'fontVariantNumeric'
      | 'interestFor'
    >
  > {
  color: Extract<TextProps$1['color'], 'base' | 'subdued'>;
  type: Extract<
    TextProps$1['type'],
    'address' | 'redundant' | 'strong' | 'generic'
  >;
  tone: Extract<
    TextProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'caution' | 'critical'
  >;
  fontVariantNumeric: Extract<
    TextProps$1['fontVariantNumeric'],
    'auto' | 'normal' | 'tabular-nums'
  >;
}

/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare abstract class TextBase
  extends PolarisCustomElement
  implements
    Pick<
      TextProps,
      | 'fontVariantNumeric'
      | 'color'
      | 'type'
      | 'dir'
      | 'accessibilityVisibility'
      | 'interestFor'
    >
{
  accessor fontVariantNumeric: TextProps['fontVariantNumeric'];
  accessor color: TextProps['color'];
  accessor type: TextProps['type'];
  accessor dir: TextProps['dir'];
  accessor accessibilityVisibility: TextProps['accessibilityVisibility'];
  accessor interestFor: string;
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

declare class Text extends TextBase implements TextProps {
  accessor tone: TextProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Text;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TextJSXProps & PreactBaseElementPropsWithChildren<Text>;
    }
  }
}

declare const tagName = 's-text';
export interface TextJSXProps
  extends Partial<TextProps>,
    Pick<TextProps$1, 'id' | 'children'> {
  /**
   * The content of the Text.
   */
  children?: ComponentChildren;
}

export {Text};
export type {TextJSXProps};
