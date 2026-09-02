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
  HeadingProps$1,
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

declare const headingFontSizes: readonly [
  'auto',
  'small',
  'base',
  'large',
  'large-100',
  'large-200',
  'large-300',
  'large-400',
];
export type HeadingFontSize = (typeof headingFontSizes)[number];

/**
 * Configure the following properties on the heading component.
 */
export interface HeadingProps
  extends Required<
    Pick<
      HeadingProps$1,
      'accessibilityRole' | 'accessibilityVisibility' | 'lineClamp'
    >
  > {
  /**
   * The font size of the heading. The named values also apply their matching
   * line-height and letter-spacing:
   *
   * - 'small' maps to headingXs
   * - 'base' maps to headingSm
   * - 'large' / 'large-100' maps to headingMd
   * - 'large-200' maps to headingLg
   * - 'large-300' maps to headingXl
   * - 'large-400' maps to heading2xl
   *
   * @default 'auto'
   */
  fontSize: HeadingFontSize;
  /**
   * The semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * - `heading`: Identifies the element as a heading for assistive technologies.
   * - `none`: Removes semantic meaning from the heading element.
   * - `presentation`: Removes semantic meaning from the heading element.
   *
   * @default 'heading'
   *
   * @implementation The `heading` role doesn't need to be applied if
   * the host applies it for you; for example, an HTML host rendering
   * an `<h2>` element should not apply the `heading` role.
   */
  accessibilityRole: Required<HeadingProps$1>['accessibilityRole'];
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

declare abstract class HeadingBase
  extends PolarisCustomElement
  implements
    Pick<
      HeadingProps,
      'accessibilityRole' | 'accessibilityVisibility' | 'fontSize' | 'lineClamp'
    >
{
  accessor fontSize: HeadingProps['fontSize'];
  accessor accessibilityRole: HeadingProps['accessibilityRole'];
  accessor lineClamp: HeadingProps['lineClamp'];
  accessor accessibilityVisibility: HeadingProps['accessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the heading component.
 * @publicDocs
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
export interface HeadingJSXProps
  extends Partial<HeadingProps>,
    Pick<HeadingProps$1, 'id' | 'children'> {
  /**
   * The heading text displayed within the heading component, which provides a title or section header for content.
   */
  children?: ComponentChildren;
}

export {Heading};
export type {HeadingJSXProps};
