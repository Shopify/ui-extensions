import {createRemoteComponent} from '@remote-ui/core';

export interface ChoiceProps {
  /**
   * Whether the choice can be selected.
   */
  disabled?: boolean;

  /**
   * A unique identifier for the field.
   */
  id?: string;

  /**
   * Content to use as the option's label.
   */
  label?: string;

  /**
   * The current value for the field. If omitted, the field will be empty. You should
   * update this value in response to the `onChange` callback.
   */
  value?: boolean;

  /**
   * Whether the choice has been selected is active.
   */
  checked?: boolean;
}

export const Choice = createRemoteComponent<'Choice', ChoiceProps>('Choice');
