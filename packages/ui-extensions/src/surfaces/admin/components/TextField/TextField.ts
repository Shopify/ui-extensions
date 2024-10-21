import {
  AutocompleteProps,
  TextAutocompleteField,
  InputProps,
  MinMaxLengthProps,
  FieldDecorationProps,
} from '../shared';

export interface TextFieldProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField>,
    FieldDecorationProps {}
