/** VERSION: 2.23.0 **/
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

/**
 * Represents the section component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredSectionProps = Required<SectionProps$1>;
/**
 * Configure the following properties on the section component.
 */
export interface SectionProps
  extends Pick<
    RequiredSectionProps,
    'accessibilityLabel' | 'heading' | 'padding'
  > {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  /**
   * The heading text displayed at the top of the section. This heading provides a title for the section's content and automatically uses the appropriate semantic heading level (h2, h3, h4) based on nesting depth to maintain proper document structure.
   */
  heading: RequiredSectionProps['heading'];
  /**
   * Supporting text that expands on the heading, rendered beneath it in a subdued treatment.
   *
   * This is not a heading: it adds no entry to the document outline, doesn't change the heading level of the section's children, and isn't announced as part of the heading. Keep whatever distinguishes this section from another in `heading`, since that is what someone navigating by heading hears.
   */
  subheading: string;
  /**
   * The padding applied to all edges of the element's content.
   *
   * - `base`: applies padding that is appropriate for the element. Note that it might result in no padding if
   * this is the right design decision in a particular context.
   * - `none`: removes all padding from the element's content. This can be useful when elements inside the section
   * need to span to the edge of the section. For example, a full-width image. In this case, rely on `s-box` with a
   * padding of 'base' to bring back the desired padding for the rest of the content. The `heading` and header
   * actions keep their padding, so they can be combined with `none`.
   *
   * @default 'base'
   */
  padding: RequiredSectionProps['padding'];
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

declare abstract class SectionBase
  extends PolarisCustomElement
  implements SectionProps
{
  constructor(renderImpl: RenderImpl);
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  accessor accessibilityLabel: SectionProps['accessibilityLabel'];
  accessor heading: SectionProps['heading'];
  accessor subheading: SectionProps['subheading'];
  accessor padding: SectionProps['padding'];
}

/**
 * Configure the following properties on the section component.
 * @publicDocs
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
      [tagName]: Omit<
        SectionJSXProps,
        | 'primaryAction'
        | 'secondaryActions'
        | 'graphic'
        | 'accessory'
        | 'supplemental'
      > &
        PreactBaseElementPropsWithChildren<Section>;
    }
  }
}

declare const tagName = 's-section';
export interface SectionJSXProps
  extends Partial<SectionProps>,
    Pick<SectionProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the section component, which groups related elements together in a logical unit with an optional heading.
   */
  children?: ComponentChildren;
  /**
   * The primary action button or link, representing the main or most important action available in this context. Typically displayed with higher visual prominence than secondary actions to establish clear hierarchy.
   */
  primaryAction?: ComponentChildren;
  /**
   * Additional action buttons or links that provide alternative or supporting actions. Visually de-emphasized compared to the primary action.
   *
   * A ButtonGroup holding an action and the icon-only activator for its Menu renders as one segmented group with a chevron activator. The group needs an `accessibilityLabel`, and must hold exactly one Button with text followed by one Button with no text that has an `accessibilityLabel` and a `commandFor` opening a Menu, both with a `variant` of `secondary` or `auto`.
   */
  secondaryActions?: ComponentChildren;
  /**
   * A decorative visual that reinforces the heading, rendered before it.
   *
   * Accepts a single icon-only Badge (`icon` set, no text content) with a `size` of `large`. The heading identifies the section, so this content is not announced by assistive technologies, and it is not rendered at all when the section has no `heading`.
   */
  graphic?: ComponentChildren;
  /**
   * Additional contextual information that qualifies the heading, rendered inline beside the heading text.
   *
   * Only accepts Badge, Icon, Button, Menu, Text, Avatar, and Thumbnail elements. Text must use `tone`, `fontSize`, and `fontWeight` of `auto`; Icon, Avatar, and Thumbnail must use `size="base"`; Badge must use `size="base"` and `color="base"`; Button must use `inlineSize="auto"`.
   */
  accessory?: ComponentChildren;
  /**
   * Status or metadata that describes the section as a whole rather than qualifying its heading, rendered at the inline-end of the header before any actions.
   *
   * This is not an action. Only accepts Badge, Avatar, Text, Icon, and Thumbnail elements, under the same prop constraints as `accessory`.
   */
  supplemental?: ComponentChildren;
}

export {Section};
export type {SectionJSXProps};
