/** VERSION: 1.38.0 **/
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
export interface SectionProps
  extends Pick<
    RequiredSectionProps,
    'accessibilityLabel' | 'heading' | 'padding'
  > {
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  heading: RequiredSectionProps['heading'];
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
  accessor accessibilityLabel: SectionProps['accessibilityLabel'];
  accessor heading: SectionProps['heading'];
  accessor padding: SectionProps['padding'];
}

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
export interface SectionJSXProps
  extends Partial<SectionProps>,
    Pick<SectionProps$1, 'id' | 'children'> {
  /**
   * The content of the Section.
   */
  children?: ComponentChildren;
}

export {Section};
export type {SectionJSXProps};
