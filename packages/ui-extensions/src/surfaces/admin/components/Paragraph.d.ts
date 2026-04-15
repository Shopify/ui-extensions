/** VERSION: 1.64.0 **/
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

/**
 * The properties for the paragraph component. These properties define blocks of text content with consistent spacing and styling for readable body copy.
 * @publicDocs
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
  /**
   * The color of the paragraph text. Available options:
   * - `'base'` - The default text color.
   * - `'subdued'` - A lighter text color for secondary information.
   */
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

declare abstract class ParagraphBase
  extends PolarisCustomElement
  implements
    Pick<
      ParagraphProps,
      | 'fontVariantNumeric'
      | 'lineClamp'
      | 'color'
      | 'dir'
      | 'accessibilityVisibility'
    >
{
  /**
   * The numeric font variant for the paragraph text.
   */
  accessor fontVariantNumeric: ParagraphProps['fontVariantNumeric'];
  /**
   * The maximum number of lines to display before the text is truncated with an ellipsis.
   */
  accessor lineClamp: ParagraphProps['lineClamp'];
  abstract tone: string;
  /**
   * The color of the paragraph text.
   */
  accessor color: ParagraphProps['color'];
  /**
   * The text direction (left-to-right or right-to-left).
   */
  accessor dir: ParagraphProps['dir'];
  /**
   * The visibility of the element to assistive technologies.
   */
  accessor accessibilityVisibility: ParagraphProps['accessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

/**
 * A custom element for displaying blocks of text content with consistent spacing and styling for readable body copy. Use Paragraph to render longer text content with proper line height and spacing between paragraphs.
 */
declare class Paragraph extends ParagraphBase implements ParagraphProps {
  /**
   * The semantic tone that's applied to the paragraph text, which changes its color to convey meaning.
   *
   * - `info`: Informational content or helpful tips (blue).
   * - `success`: Positive outcomes or successful states (green).
   * - `warning`: Important warnings about potential issues (orange).
   * - `critical`: Urgent problems or destructive actions (red).
   * - `caution`: Advisory notices that need attention (yellow).
   */
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
/**
 * The JSX properties for the paragraph component. These properties define how a paragraph is rendered in Preact or JSX.
 * @publicDocs
 */
export interface ParagraphJSXProps
  extends Partial<ParagraphProps>,
    Pick<ParagraphProps$1, 'id' | 'children'> {
  /**
   * The content of the paragraph.
   */
  children?: ComponentChildren;
}

export {Paragraph};
export type {ParagraphJSXProps};
