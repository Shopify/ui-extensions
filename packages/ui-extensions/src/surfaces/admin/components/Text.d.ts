/** VERSION: 1.64.0 **/
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

/**
 * @publicDocs
 */
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
  /**
   * The color of the text. Available options:
   * - `'base'` - The default text color.
   * - `'subdued'` - A lighter text color for secondary information.
   */
  color: Extract<TextProps$1['color'], 'base' | 'subdued'>;
  /**
   * The semantic type and styling treatment for the text content.
   *
   * Other presentation properties on Text override the default styling.
   *
   * - `strong`: Emphasizes the text with strong importance, typically displayed in bold.
   * - `generic`: Standard text with no special semantic meaning or styling.
   * - `address`: Marks the text as contact information, such as a physical or email address.
   * - `redundant`: Indicates the text is redundant or duplicated information for screen reader context.
   *
   * @default 'generic'
   */
  type: Extract<
    TextProps$1['type'],
    'address' | 'redundant' | 'strong' | 'generic'
  >;
  /**
   * The semantic tone that's applied to the text, which changes its color to convey meaning.
   *
   * - `info`: Informational content or helpful tips (blue).
   * - `success`: Positive outcomes or successful states (green).
   * - `warning`: Important warnings about potential issues (orange).
   * - `critical`: Urgent problems or destructive actions (red).
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent (gray).
   * - `caution`: Advisory notices that need attention (yellow).
   *
   * @default 'auto'
   */
  tone: Extract<
    TextProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'caution' | 'critical'
  >;
  /**
   * The numeric font variant for the text. Available options:
   * - `'auto'` - The font variant is automatically determined.
   * - `'normal'` - Standard numeric rendering.
   * - `'tabular-nums'` - Monospaced numbers for better alignment in tables.
   */
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
  /**
   * The numeric font variant for the text.
   */
  accessor fontVariantNumeric: TextProps['fontVariantNumeric'];
  /**
   * The color of the text.
   */
  accessor color: TextProps['color'];
  /**
   * The semantic type and styling treatment for the text content.
   *
   * - `strong`: Emphasizes the text with strong importance, typically displayed in bold.
   * - `generic`: Standard text with no special semantic meaning or styling.
   * - `address`: Marks the text as contact information, such as a physical or email address.
   * - `redundant`: Indicates the text is redundant or duplicated information for screen reader context.
   */
  accessor type: TextProps['type'];
  /**
   * The text direction (left-to-right or right-to-left).
   */
  accessor dir: TextProps['dir'];
  /**
   * The visibility of the element to assistive technologies.
   */
  accessor accessibilityVisibility: TextProps['accessibilityVisibility'];
  /**
   * The ID of an element this text provides contextual information for.
   */
  accessor interestFor: string;
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

/**
 * A custom element for displaying inline or small blocks of text with various visual styles and semantic meanings. Use Text to render short pieces of content with appropriate styling, emphasis, and color treatment.
 */
declare class Text extends TextBase implements TextProps {
  /**
   * The semantic tone that's applied to the text, which changes its color to convey meaning.
   *
   * - `info`: Informational content or helpful tips (blue).
   * - `success`: Positive outcomes or successful states (green).
   * - `warning`: Important warnings about potential issues (orange).
   * - `critical`: Urgent problems or destructive actions (red).
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent (gray).
   * - `caution`: Advisory notices that need attention (yellow).
   */
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
/**
 * The JSX properties for the text component. These properties define how text is rendered in Preact or JSX.
 * @publicDocs
 */
export interface TextJSXProps
  extends Partial<TextProps>,
    Pick<TextProps$1, 'id' | 'children'> {
  /**
   * The content of the text.
   */
  children?: ComponentChildren;
}

export {Text};
export type {TextJSXProps};
