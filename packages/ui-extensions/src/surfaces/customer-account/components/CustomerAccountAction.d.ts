export interface CustomerAccountActionProps {
  /**
   * Sets the heading of the Action container.
   */
  heading: string;
}

declare global {
  interface HTMLElementTagNameMap {
    ['s-customer-account-action']: HTMLElement & CustomerAccountActionProps;
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
