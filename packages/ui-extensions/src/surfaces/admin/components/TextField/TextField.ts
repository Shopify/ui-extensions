import {createRemoteComponent} from '@remote-ui/core';
import {
  AutocompleteProps,
  TextAutocompleteField,
  InputProps,
  MinMaxLengthProps,
} from '../shared';

export interface TextFieldProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField> {}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);
