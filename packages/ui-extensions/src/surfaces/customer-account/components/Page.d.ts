import {BaseElementPropsWithChildren, IdProps} from './shared';

export interface PageProps extends IdProps {
  /**
   * The main page heading
   */
  heading?: string;

  /**
   * The text to be used as subheading.
   */
  subheading?: string;
}

export interface PageElementSlots {
  /**
   * The breadcrumb actions for the page. Accepts a single Button element with restricted properties (see below).
   */
  'breadcrumb-actions'?: HTMLElement;
  /**
   * The primary action for the page. Accepts a single Button element with restricted properties (see below).
   */
  'primary-action'?: HTMLElement;
  /**
   * The secondary actions for the page. Accepts multiple Button elements with restricted properties (see below).
   */
  'secondary-actions'?: HTMLElement;
}

export interface PageElement extends HTMLElement, PageProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-page']: PageElement;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-page']: BaseElementPropsWithChildren<PageElement> & PageProps;
    }
  }
}
