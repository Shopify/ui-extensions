import {BaseElementPropsWithChildren, IdProps} from './shared';

export interface ButtonGroupProps extends IdProps {
  /**
   * Label for the button group that describes the content of the group for screen reader users to understand what's included.
   */
  accessibilityLabel?: string;
}

export interface ButtonGroupElementSlots {
  /**
   * The primary action for the group. Accepts a single [Button](/docs/api/checkout-ui-extensions/polaris-web-components/actions/button) element.
   */
  'primary-action'?: HTMLElement;
  /**
   * The secondary actions for the group. Accepts multiple [Button](/docs/api/checkout-ui-extensions/polaris-web-components/actions/button) elements.
   */
  'secondary-actions'?: HTMLElement;
}

export interface ButtonGroupElement
  extends ButtonGroupProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-button-group']: ButtonGroupElement;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-button-group']: BaseElementPropsWithChildren<ButtonGroupElement> &
        ButtonGroupProps;
    }
  }
}
