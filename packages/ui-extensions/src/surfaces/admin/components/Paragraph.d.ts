/** VERSION: 2.39.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  ParagraphProps$1,
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

export type ParagraphFontSize = BodyFontSize;
export type ParagraphFontWeight = TypographyFontWeight;
/**
 * Configure the following properties on the paragraph component.
 */
export interface ParagraphProps
  extends Required<
    Pick<
      ParagraphProps$1,
      | 'accessibilityVisibility'
      | 'fontVariantNumeric'
      | 'tone'
      | 'dir'
      | 'color'
      | 'lineClamp'
    >
  > {
  color: Extract<ParagraphProps$1['color'], 'base' | 'subdued'>;
  /**
   * The semantic tone that's applied to the paragraph text, which changes its color to convey meaning.
   *
   * - `info`: Informational content or helpful tips (blue).
   * - `success`: Positive outcomes or successful states (green).
   * - `warning`: Important warnings about potential issues (orange).
   * - `critical`: Urgent problems or destructive actions (red).
   * - `caution`: Advisory notices that need attention (yellow).
   */
  tone: Extract<
    ParagraphProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  /**
   * Font size of the paragraph. The named values also apply their matching
   * line-height and letter-spacing.
   *
   * @default 'auto'
   */
  fontSize: ParagraphFontSize;
  /**
   * Font weight of the paragraph.
   *
   * @default 'auto'
   */
  fontWeight: ParagraphFontWeight;
  /**
   * @deprecated Use `Number` for inline numeric values instead.
   */
  fontVariantNumeric: Extract<
    ParagraphProps$1['fontVariantNumeric'],
    'auto' | 'normal' | 'tabular-nums'
  >;
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
 * What a component wants to hear about its own light DOM.
 *
 * Structure — children added, removed or moved — is always observed. The
 * `attributes` list is the part worth thinking about: the observer is a
 * `subtree` one, so every entry makes every descendant's writes to that
 * attribute wake this component up. List the attributes the component
 * actually reads off its children and nothing else.
 */
export interface LightDomObservation {
  /**
   * Descendant attributes that should call {@link lightDomChanged}. Omit it to
   * hear about structure only.
   *
   * `'all'` observes every attribute on every descendant, which is only right
   * for a component that mirrors arbitrary child markup it cannot enumerate:
   * Menu copies an item's `innerHTML`, and the quick picker field clones the
   * elements slotted into an option. Anything else should list its attributes.
   */
  attributes?: ReadonlyArray<string> | 'all';
}
/**
 * The observer installed for {@link observeLightDom}. Deliberately not
 * exported: nothing outside this module can name the symbol, so nothing
 * outside this module can reach the observer.
 */
declare const lightDomObserver: unique symbol;
/**
 * Static opt-in to light-DOM observation — see {@link LightDomObservation}.
 *
 * ```ts
 * static [observeLightDom]: LightDomObservation = { attributes: ['selected'] };
 * ```
 *
 * A Symbol key keeps this off the element's public API (and out of the
 * generated docs and definitions) while still letting subclasses in other
 * files declare it.
 */
declare const observeLightDom: unique symbol;
/**
 * Called once per batch of light-DOM mutations a component opted into with
 * {@link observeLightDom}. Defaults to a re-render; override it with a Symbol
 * key, the same way the opt-in is declared, to do more.
 */
declare const lightDomChanged: unique symbol;
declare class PolarisCustomElement extends PreactCustomElement {
  /**
   * Opt in to light-DOM observation. Undefined means no observer is created.
   * @private
   */
  static [observeLightDom]?: LightDomObservation;
  /** @private */
  [lightDomObserver]?: MutationObserver;
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /**
   * Runs when the light DOM this component opted into observing changes.
   * @private
   */
  [lightDomChanged](): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

declare abstract class ParagraphBase
  extends PolarisCustomElement
  implements
    Pick<
      ParagraphProps,
      | 'fontVariantNumeric'
      | 'fontSize'
      | 'fontWeight'
      | 'lineClamp'
      | 'color'
      | 'dir'
      | 'accessibilityVisibility'
    >
{
  accessor fontSize: ParagraphProps['fontSize'];
  accessor fontWeight: ParagraphProps['fontWeight'];
  /**
   * @deprecated Use `Number` for inline numeric values instead.
   */
  accessor fontVariantNumeric: ParagraphProps['fontVariantNumeric'];
  accessor lineClamp: ParagraphProps['lineClamp'];
  abstract tone: string;
  accessor color: ParagraphProps['color'];
  accessor dir: ParagraphProps['dir'];
  accessor accessibilityVisibility: ParagraphProps['accessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the paragraph component.
 * @publicDocs
 */
declare class Paragraph extends ParagraphBase implements ParagraphProps {
  accessor tone: ParagraphProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Paragraph;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ParagraphJSXProps &
        PreactBaseElementPropsWithChildren<Paragraph>;
    }
  }
}

declare const tagName = 's-paragraph';
export interface ParagraphJSXProps
  extends Partial<ParagraphProps>,
    Pick<ParagraphProps$1, 'id' | 'children'> {
  /**
   * The paragraph text content displayed within the paragraph component, which presents a block of related text with appropriate styling.
   */
  children?: ComponentChildren;
}

export {Paragraph};
export type {ParagraphJSXProps};
