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
