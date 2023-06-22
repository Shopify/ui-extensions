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
   * A label used for buyers using assistive technologies. When set, any
   * `children` supplied to this component will not be announced to screen reader users.
   */
  accessibilityLabel?: string;
}

/**
 * Options inside a `ChoiceList`.
 * The wrapping `ChoiceList` component will dictate if the choice renders as radio buttons or checkboxes.
 */
export const Choice = createRemoteComponent<'Choice', ChoiceProps>('Choice');
