import {createRemoteComponent} from '@remote-ui/core';

export interface CheckboxProps {
  /** Label for the checkbox. */
  label?: string;

  /** Checkbox is selected. */
  checked?: boolean;

  /**
   * Alias for `checked`, to support iterating over multiple types of form fields.
   * If both `checked` and `value` are used, `checked` is the source of truth.
   */
  value?: boolean;

  /** Callback when checkbox is toggled. */
  onChange?(value: boolean): void | Promise<void>;
}

/**
 * Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).
 */
export const Checkbox = createRemoteComponent<'Checkbox', CheckboxProps>(
  'Checkbox',
);
