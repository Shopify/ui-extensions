/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  SectionProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export type RequiredSectionProps = Required<SectionProps$1>;
/**
 * The properties for the section component. A section groups related content together with an optional heading, providing semantic structure and visual separation.
 * @publicDocs
 */
export interface SectionProps
  extends Pick<
    RequiredSectionProps,
    'accessibilityLabel' | 'heading' | 'padding'
  > {
  /**
   * An accessibility label for screen readers that provides additional context when the heading isn't descriptive enough on its own.
   */
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  /**
   * The heading text that appears at the top of the section, helping users understand what content the section contains.
   */
  heading: RequiredSectionProps['heading'];
  /**
   * Whether the section has padding around its content. Set to `true` to add padding, or `false` to remove it.
   */
  padding: RequiredSectionProps['padding'];
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

declare abstract class SectionBase
  extends PolarisCustomElement
  implements SectionProps
{
  constructor(renderImpl: RenderImpl);
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  /**
   * The accessibility label for screen readers.
   */
  accessor accessibilityLabel: SectionProps['accessibilityLabel'];
  /**
   * The heading text for the section.
   */
  accessor heading: SectionProps['heading'];
  /**
   * Whether the section has padding.
   */
  accessor padding: SectionProps['padding'];
}

/**
 * A section is a container that groups related content together with an optional heading.
 */
declare class Section extends SectionBase implements SectionProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Section;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: SectionJSXProps & PreactBaseElementPropsWithChildren<Section>;
    }
  }
}

declare const tagName = 's-section';
/**
 * The properties for the section component when it's used in JSX.
 * @publicDocs
 */
export interface SectionJSXProps
  extends Partial<SectionProps>,
    Pick<SectionProps$1, 'id' | 'children'> {
  /**
   * The child elements to render inside the section.
   */
  children?: ComponentChildren;
}

export {Section};
export type {SectionJSXProps};
