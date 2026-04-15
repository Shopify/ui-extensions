/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  HeadingProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * The properties for the heading component. These properties define hierarchical section titles and headings with appropriate semantic meaning and visual hierarchy.
 * @publicDocs
 */
export interface HeadingProps
  extends Required<
    Pick<
      HeadingProps$1,
      'accessibilityRole' | 'accessibilityVisibility' | 'lineClamp'
    >
  > {}

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

declare abstract class HeadingBase
  extends PolarisCustomElement
  implements
    Pick<
      HeadingProps,
      'accessibilityRole' | 'accessibilityVisibility' | 'lineClamp'
    >
{
  /**
   * The ARIA role for the heading. Set to `'heading'` (the default) for standard heading semantics, or `'presentation'` / `'none'` to remove heading semantics for decorative use.
   */
  accessor accessibilityRole: HeadingProps['accessibilityRole'];
  /**
   * The maximum number of lines to display before the text is truncated with an ellipsis.
   */
  accessor lineClamp: HeadingProps['lineClamp'];
  /**
   * The visibility of the element to assistive technologies.
   */
  accessor accessibilityVisibility: HeadingProps['accessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

/**
 * A custom element for displaying hierarchical section titles and headings with appropriate semantic meaning and visual styling. Use Heading to structure your content with proper heading levels for both visual hierarchy and accessibility.
 */
declare class Heading extends HeadingBase implements HeadingProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Heading;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: HeadingJSXProps & PreactBaseElementPropsWithChildren<Heading>;
    }
  }
}

declare const tagName = 's-heading';
/**
 * The JSX properties for the heading component. These properties define how a heading is rendered in Preact or JSX.
 * @publicDocs
 */
export interface HeadingJSXProps
  extends Partial<HeadingProps>,
    Pick<HeadingProps$1, 'id' | 'children'> {
  /**
   * The content of the heading.
   */
  children?: ComponentChildren;
}

export {Heading};
export type {HeadingJSXProps};
