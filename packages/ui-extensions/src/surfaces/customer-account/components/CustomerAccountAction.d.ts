export interface CustomerAccountActionProps {
  /**
   * Sets the heading of the Action container.
   */
  heading: string;
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
  interface BaseProps {
    children?: preact.ComponentChildren;
    slot?: Lowercase<string>;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-customer-account-action']: BaseProps & CustomerAccountActionProps;
    }
  }
}
