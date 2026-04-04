import {BaseElementPropsWithChildren, IdProps} from './shared';

export interface SectionProps extends IdProps {
  /**
   * A label announced by assistive technologies that describes the purpose or contents of the element. Only set this when the element's visible content doesn't provide enough context on its own.
   */
  accessibilityLabel?: string;

  /**
   * A title that describes the content of the section.
   */
  heading?: string;
}

export interface SectionElementSlots {
  /**
   * The main call-to-action for the section. Accepts a single [button](/docs/api/{API_NAME}/{API_VERSION}/web-components/actions/button) component.
   */
  'primary-action'?: HTMLElement;
  /**
   * Additional actions for the section. Accepts one or more [button](/docs/api/{API_NAME}/{API_VERSION}/web-components/actions/button) components.
   */
  'secondary-actions'?: HTMLElement;
}

export interface SectionElement extends SectionProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-section']: SectionElement;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-section']: BaseElementPropsWithChildren<SectionElement> &
        SectionProps;
    }
  }
}
