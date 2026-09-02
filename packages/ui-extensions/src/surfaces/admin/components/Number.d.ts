/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  TextProps,
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

export type NumberFontSize = BodyFontSize;
export type NumberFontWeight = TypographyFontWeight;
export interface NumberProps
  extends Required<Pick<TextProps, 'accessibilityVisibility' | 'dir'>> {
  /**
   * The semantic tone that's applied to the number, which changes its color to convey meaning.
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
    TextProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'caution' | 'critical'
  >;
  /**
   * The color emphasis applied to the number.
   *
   * - `base`: Standard emphasis for numeric content.
   * - `subdued`: Deemphasized color for secondary or supporting numeric content.
   *
   * @default 'base'
   */
  color: Extract<TextProps['color'], 'base' | 'subdued'>;
  /**
   * Font size of the number. The named values also apply their matching
   * line-height and letter-spacing.
   *
   * @default 'auto'
   */
  fontSize: NumberFontSize;
  /**
   * Font weight of the number.
   *
   * @default 'auto'
   */
  fontWeight: NumberFontWeight;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
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

/**
 * Configure the following properties on the number component.
 * @publicDocs
 */
declare class Number extends PolarisCustomElement implements NumberProps {
  accessor tone: NumberProps['tone'];
  accessor color: NumberProps['color'];
  accessor fontSize: NumberProps['fontSize'];
  accessor fontWeight: NumberProps['fontWeight'];
  accessor dir: NumberProps['dir'];
  accessor accessibilityVisibility: NumberProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Number;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: NumberJSXProps & PreactBaseElementPropsWithChildren<Number>;
    }
  }
}

declare const tagName = 's-number';

export interface NumberJSXProps
  extends Partial<NumberProps>,
    Pick<TextProps, 'id' | 'lang' | 'children'> {
  /**
   * The number to display. The component styles the value you pass in — typography, tone, and color — and renders it as given, so format and localize it yourself.
   */
  children?: ComponentChildren;
}

export {Number};
export type {NumberJSXProps};
