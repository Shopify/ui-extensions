import {BaseElementPropsWithChildren, IdProps} from './shared';

export interface CustomerAccountActionProps extends IdProps {
  /**
   * Sets the heading of the Action container.
   */
  heading: string;
}

export interface CustomerAccountActionElementSlots {
  /**
   * The primary action to perform, provided as a button type element.
   */
  'primary-action'?: HTMLElement;
  /**
   * The secondary actions to perform, provided as button type elements.
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
