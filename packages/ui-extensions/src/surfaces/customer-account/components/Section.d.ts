import {BaseElementPropsWithChildren, IdProps} from './shared';

export interface SectionProps extends IdProps {
  /**
   * A label used to describe the section that will be announced by assistive technologies.
   *
   * When no `heading` property is provided or included as a children of the Section, you **must** provide an
   * `accessibilityLabel` to describe the Section. This is important as it allows assistive technologies to provide
   * the right context to users.
   */
  accessibilityLabel?: string;

  /**
   * A title that describes the content of the section.
   */
  heading?: string;
}

export interface SectionElementSlots {
  /**
   * The primary action to perform, provided as a button type element.
   */
  'primary-action'?: HTMLElement;
  /**
   * The secondary actions to perform, provided as button type elements.
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
