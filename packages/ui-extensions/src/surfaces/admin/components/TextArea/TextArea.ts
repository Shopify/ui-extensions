import {
  AutocompleteProps,
  TextAutocompleteField,
  InputProps,
  MinMaxLengthProps,
} from '../shared';

export interface TextAreaProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField> {
  /**
   * A number of visible text lines.
   *
   * @defaultValue 2
   */
  rows?: number;
}
