import {createRemoteComponent} from '@remote-ui/core';
import {
  AutocompleteProps,
  TextAutocompleteField,
  InputProps,
  MinMaxLengthProps,
  FieldDecorationProps,
} from '../shared';

/**
 * Props for the TextField component, a single-line text input for entering
 * short-form content such as names, emails, or search queries. It extends
 * standard input props with min/max length constraints, autocomplete support,
 * and a field decoration option (suffix).
 */
export interface TextFieldProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField>,
    FieldDecorationProps {}

/** A TextField component for single-line text input. */
export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);
