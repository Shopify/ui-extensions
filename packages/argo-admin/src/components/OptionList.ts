import {createRemoteComponent} from '@remote-ui/core';

interface OptionDescriptor {
  /** Value of the option */
  value: string;

  /** Display label for the option */
  label: string;

  /** Whether the option is disabled or not */
  disabled?: boolean;
}

export interface OptionListProps {
  /** List title */
  title?: string;

  /** Collection of options to be listed */
  options?: OptionDescriptor[];

  /** The selected options */
  selected: string[];

  /** Allow more than one option to be selected */
  allowMultiple?: boolean;

  /** Callback when selection is changed */
  onChange(selected: string[]): void;
}

export const OptionList = createRemoteComponent<'OptionList', OptionListProps>('OptionList');
