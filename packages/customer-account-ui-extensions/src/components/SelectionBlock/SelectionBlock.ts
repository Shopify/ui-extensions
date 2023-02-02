import {createRemoteComponent} from '@remote-ui/core';

export interface SelectionBlockProps {
  /** Callback for onClick. */
  onClick?: () => void;
  /** A boolean value to determine if section has an on hover background. */
  backgroundHover?: boolean;
  /**
   * A label to use for the section title that will be used for buyers using
   * assistive technologies.
   */
  accessibilityLabel?: string;
}

export const SelectionBlock = createRemoteComponent<
  'SelectionBlock',
  SelectionBlockProps
>('SelectionBlock');
