import {createRemoteComponent} from '@remote-ui/core';

export interface RadioProps {
  /** Label for the radio button. */
  label?: string;

  /** Additional text to aid in use. */
  helpText?: string;

  /** Radio button is selected. */
  checked?: boolean;

  /** Unique ID for radio button. */
  id?: string;

  /** Use `name` to group radio buttons together by giving them the same `name`. */
  name: string;

  /** Value of selected input on selected */
  value?: string;

  /** Callback when the radio button is toggled. */
  onChange?: (newValue: string) => void;
}

/**
 * Radio allows merchants to choose a single item from a list.
 */
export const Radio = createRemoteComponent<'Radio', RadioProps>('Radio');
