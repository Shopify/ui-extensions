/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PageProps$1,
  ComponentChildren,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

/**
 * Use as the outer wrapper of a page.
 */
export interface PageProps
  extends Required<Pick<PageProps$1, 'inlineSize' | 'heading'>> {
  /**
   * The inline size of the page
   * - `base` corresponds to a set default inline size
   * - `large` full width with whitespace
   *
   * @default 'base'
   */
  inlineSize: Extract<PageProps$1['inlineSize'], 'base' | 'large' | 'small'>;
  /**
   * The main page heading
   */
  heading: Required<PageProps$1>['heading'];
}

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

declare abstract class PageBase
  extends PolarisCustomElement
  implements PageProps
{
  accessor inlineSize: PageProps['inlineSize'];
  accessor heading: PageProps['heading'];
  constructor(renderImpl: RenderImpl);
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}

/**
 * Use as the outer wrapper of a page.
 * @publicDocs
 */
declare class Page extends PageBase implements PageProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Page;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<
        PageJSXProps,
        | 'aside'
        | 'primaryAction'
        | 'secondaryActions'
        | 'breadcrumbActions'
        | 'supplementalStart'
      > &
        PreactBaseElementPropsWithChildren<Page>;
    }
  }
}

declare const tagName = 's-page';
export interface PageJSXProps
  extends Partial<PageProps>,
    Pick<PageProps$1, 'id' | 'children'> {
  /**
   * The main page content displayed within the page component, which serves as the primary container for the page's information and interface elements.
   */
  children?: ComponentChildren;
  /**
   * The content to display in the aside section of the page.
   *
   * This slot is only rendered when `inlineSize` is "base".
   */
  aside?: ComponentChildren;
  /**
   * The primary action for the page.
   *
   * Only accepts a single button component with a `variant` of `primary`.
   *
   */
  primaryAction?: ComponentChildren;
  /**
   * The secondary actions for the page.
   *
   * Only accepts button group and button components with a `variant` of `secondary` or `auto`.
   */
  secondaryActions?: ComponentChildren;
  /**
   * The navigation back actions for the page.
   *
   * Only accepts link components.
   */
  breadcrumbActions?: ComponentChildren;
  /**
   * A slot for content that comes before the main content, such as an `s-banner`.
   */
  supplementalStart?: ComponentChildren;
}

export {Page};
export type {PageJSXProps};
