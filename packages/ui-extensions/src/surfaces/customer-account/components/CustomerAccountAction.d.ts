import {BaseElementPropsWithChildren, IdProps} from './shared';

export interface CustomerAccountActionProps extends IdProps {
  /**
   * Sets the heading of the action container.
   */
  heading: string;
}

export interface CustomerAccountActionElementSlots {
  /**
   * The primary action for the page. Accepts a single Button element with restricted properties (see below).
   */
  'primary-action'?: HTMLElement;
  /**
   * The secondary actions for the page. Accepts multiple Button elements with restricted properties (see below).
   */
  'secondary-actions'?: HTMLElement;
}

export interface CustomerAccountActionElement
  extends HTMLElement,
    CustomerAccountActionProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-customer-account-action']: CustomerAccountActionElement;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-customer-account-action']: BaseElementPropsWithChildren<CustomerAccountActionElement> &
        CustomerAccountActionProps;
    }
  }
}
