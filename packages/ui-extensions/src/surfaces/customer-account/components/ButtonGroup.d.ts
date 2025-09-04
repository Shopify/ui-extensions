import {BaseElementPropsWithChildren, IdProps} from './shared';

export interface ButtonGroupProps extends IdProps {
  /**
   * Label for the button group that describes the content of the group for screen reader users to understand what's included.
   */
  accessibilityLabel?: string;
}

export interface ButtonGroupElementSlots {
  /**
   * The primary action to perform, provided as a button type element.
   */
  'primary-action'?: HTMLElement;
  /**
   * The secondary actions to perform, provided as button type elements.
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
