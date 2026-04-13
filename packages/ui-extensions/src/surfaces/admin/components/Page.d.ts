/** VERSION: 1.63.1 **/
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

export interface PageProps
  extends Required<Pick<PageProps$1, 'inlineSize' | 'heading'>> {
  inlineSize: Extract<PageProps$1['inlineSize'], 'base' | 'large' | 'small'>;
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
        'aside' | 'primaryAction' | 'secondaryActions' | 'breadcrumbActions'
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
   * The main content of the page, typically containing the primary information, forms,
   * or interactive elements that fulfill the page's purpose.
   */
  children?: ComponentChildren;
  /**
   * Supplementary content displayed in a sidebar alongside the main content. Use for
   * related information, navigation aids, or contextual actions that support the main content.
   * This slot is only rendered when `inlineSize` is set to `base`.
   */
  aside?: ComponentChildren;
  /**
   * The main action button displayed in the page header, representing the primary action
   * users can take on this page. Only accepts a single button component with a `variant` of `primary`.
   * Common examples include "Create", "Save", or "Add".
   */
  primaryAction?: ComponentChildren;
  /**
   * Additional action buttons displayed in the page header, providing alternative or supporting
   * actions. Only accepts button group and button components with a `variant` of `secondary`
   * or `auto`. These are visually de-emphasized compared to the primary action.
   */
  secondaryActions?: ComponentChildren;
  /**
   * Navigation links that help users understand their location within the app and navigate
   * back to parent pages. Only accepts link components. Typically displays as a back arrow
   * or breadcrumb trail in the page header.
   */
  breadcrumbActions?: ComponentChildren;
}

export {Page};
export type {PageJSXProps};
