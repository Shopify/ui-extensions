import {createRemoteComponent} from '@remote-ui/core';

export interface ChoiceProps {
  /**
   * A unique identifier for the choice.
   */
  id: string;
  /**
   * Whether the choice can be changed.
   */
  disabled?: boolean;
  /**
   * A label to use for the choice that will be used for buyers using
   * assistive technologies. When provided, any `children` supplied to
   * this component are hidden from being seen for accessibility purposes
   * to prevent duplicate content from being read.
   */
  accessibilityLabel?: string;
}

/**
 * Use choice lists to create a group of related options for customers to choose from. A choice list can be made up of radio buttons or checkboxes.
 */
export const Choice = createRemoteComponent<'Choice', ChoiceProps>('Choice');
