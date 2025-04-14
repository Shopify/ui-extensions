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

export interface ImageGroupProps {
  /**
   * Indicates the total number of items that could be displayed in the image group.
   * It is used to determine the remaining number to show when all the available image slots have been filled.
   */
  totalItems?: number;
}

declare class ImageGroupComponent
  extends HTMLElement
  implements ImageGroupProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-image-group']: ImageGroupComponent;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-image-group']: HTMLAttributes<HTMLElement> & ImageGroupProps;
    }
  }
}

export interface PageProps {
  /**
   * The main page heading
   */
  heading?: string;

  /**
   * The text to be used as subheading.
   */
  subheading?: string;
}

declare class PageComponent extends HTMLElement implements PageProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-page']: PageComponent;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-page']: HTMLAttributes<HTMLElement> & PageProps;
    }
  }
}

type PolicyType = 'refund';

// The interface is duplicated in the `ui-extensions-react` package because it no longer can be imported
// More on the PR: https://github.com/Shopify/ui-extensions/pull/1399
export interface PolicyModalProps {
  /**
   * Whether the modal should be rendered.
   * Modal is a controlled component, so you must keep the state of the `open` prop yourself.
   */
  open: boolean;
  /**
   * Callback when either the close button, the backdrop, or the `escape` key is pressed.
   * `onClose` is only called while the modal is open and attempts to be closed,
   * not when it exits the viewport.
   * You’ll usually want to use this callback to set the `open` prop to `false`.
   */
  onClose: () => void;
  /**
   * A title rendered as a `Heading` at the top of the modal.
   */
  title: string;
  /**
   * Type of policy to render.
   */
  type: PolicyType;
}

declare class PolicyModalComponent
  extends HTMLElement
  implements PolicyModalProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-policy-modal']: PolicyModalComponent;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-policy-modal']: HTMLAttributes<HTMLElement> & PolicyModalProps;
    }
  }
}
