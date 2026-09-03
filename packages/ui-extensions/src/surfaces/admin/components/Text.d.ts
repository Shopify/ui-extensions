/** VERSION: 2.23.0 **/
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
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

export type ReactIntrinsicElementChildren<PreactProps extends object> =
  'children' extends keyof PreactProps
    ? {
        children?: ReactNode;
      }
    : Record<never, never>;
export type ReactIntrinsicElementProps<
  PreactProps extends object,
  ElementType,
> = Omit<PreactProps, 'children' | 'key' | 'ref' | 'slot'> &
  ReactIntrinsicElementChildren<PreactProps> &
  RefAttributes<ElementType> & {
    slot?: Lowercase<string>;
  };
export type ReactIntrinsicElements = {
  [Tag in Exclude<
    Extract<keyof preact$1.createElement.JSX.IntrinsicElements, `s-${string}`>,
    `s-test-${string}`
  >]: ReactIntrinsicElementProps<
    preact$1.createElement.JSX.IntrinsicElements[Tag],
    Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
  >;
};
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ReactIntrinsicElements {}
  }
}

declare const typographyFontWeights: readonly [
  'auto',
  'base',
  'medium',
  'semibold',
  'bold',
];
export type TypographyFontWeight = (typeof typographyFontWeights)[number];
declare const bodyFontSizes: readonly [
  'auto',
  'small-200',
  'small-100',
  'small',
  'base',
  'large',
  'large-100',
];
export type BodyFontSize = (typeof bodyFontSizes)[number];

export type TextFontSize = BodyFontSize;
export type TextFontWeight = TypographyFontWeight;
/**
 * Configure the following properties on the text component.
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
  color: Extract<TextProps$1['color'], 'base' | 'subdued'>;
  /**
   * The semantic type and styling treatment for the text content.
   *
   * Other presentation properties on text override the default styling.
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
   * @deprecated Use `Number` for inline numeric values instead.
   */
  fontVariantNumeric: Extract<
    TextProps$1['fontVariantNumeric'],
    'auto' | 'normal' | 'tabular-nums'
  >;
  /**
   * Font size of the text. The named values also apply their matching
   * line-height and letter-spacing.
   *
   * @default 'auto'
   */
  fontSize: TextFontSize;
  /**
   * Font weight of the text.
   *
   * @default 'auto'
   */
  fontWeight: TextFontWeight;
}

/**
 * Base props for Preact custom elements without children support. Includes common properties like key, ref, and slot for elements that don't accept child content.
 * @publicDocs
 */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /**
   * A unique identifier for this element, used by the virtual DOM to efficiently track and update elements in lists.
   * Essential for maintaining component state and optimizing re-renders when lists change.
   */
  key?: preact.Key;
  /**
   * A reference to access the underlying DOM element directly.
   * Typically created using `useRef()` to interact with the element imperatively or measure its properties.
   */
  ref?: preact.Ref<TClass>;
  /**
   * The named slot to which this element is assigned in the parent component's shadow DOM.
   *
   * Used for advanced component composition with web components.
   */
  slot?: Lowercase<string>;
}
/**
 * Base props for Preact custom elements with children support. Extends PreactBaseElementProps with the ability to render child elements.
 * @publicDocs
 */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  /**
   * The child elements to be rendered within this component.
   */
  children?: preact.ComponentChildren;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

declare abstract class TextBase
  extends PolarisCustomElement
  implements
    Pick<
      TextProps,
      | 'fontVariantNumeric'
      | 'fontSize'
      | 'fontWeight'
      | 'color'
      | 'type'
      | 'dir'
      | 'accessibilityVisibility'
      | 'interestFor'
    >
{
  accessor fontSize: TextProps['fontSize'];
  accessor fontWeight: TextProps['fontWeight'];
  /**
   * @deprecated Use `Number` for inline numeric values instead.
   */
  accessor fontVariantNumeric: TextProps['fontVariantNumeric'];
  accessor color: TextProps['color'];
  accessor type: TextProps['type'];
  accessor dir: TextProps['dir'];
  accessor accessibilityVisibility: TextProps['accessibilityVisibility'];
  accessor interestFor: string;
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the text component.
 * @publicDocs
 */
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
   * The text content displayed within the text component, which applies semantic meaning and styling appropriate to the specified text type.
   */
  children?: ComponentChildren;
}

export {Text};
export type {TextJSXProps};
