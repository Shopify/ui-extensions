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
   * assistive technologies. When set, any `children` supplied to
   * this component are hidden from being seen for accessibility purposes
   * to prevent duplicate content from being read.
   */
  accessibilityLabel?: string;
}

/**
 * Options inside a `ChoiceList`.
 * The wrapping `ChoiceList` component will dictate if the choice renders as radio buttons or checkboxes.
 */
export const Choice = createRemoteComponent<'Choice', ChoiceProps>('Choice');
