export interface CustomerAccountActionProps {
  /**
   * Sets the heading of the Action container.
   */
  heading: string;
}

declare class CustomerAccountActionComponent
  extends HTMLElement
  implements CustomerAccountActionProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-customer-account-action']: CustomerAccountActionComponent;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-customer-account-action']: HTMLAttributes<HTMLElement> &
        CustomerAccountActionProps;
    }
  }
}
