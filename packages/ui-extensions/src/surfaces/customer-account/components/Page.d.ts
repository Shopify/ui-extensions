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
   * The breadcrumb actions to perform, provided as button type elements.
   */
  'breadcrumb-actions'?: HTMLElement;
  /**
   * The primary action to perform, provided as a button type element.
   */
  'primary-action'?: HTMLElement;
  /**
   * The secondary actions to perform, provided as button type elements.
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
