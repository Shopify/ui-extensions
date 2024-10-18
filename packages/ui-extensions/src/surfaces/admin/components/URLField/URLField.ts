import {
  AnyAutocompleteField,
  AutocompleteProps,
  AutocompleteAddressGroup,
  AutocompleteFieldInstantMessageAlias,
  InputProps,
  MinMaxLengthProps,
} from '../shared';

export interface URLFieldProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<URLAutocompleteField> {}

export type URLAutocompleteField = Extract<
  AnyAutocompleteField,
  | 'url'
  | 'photo'
  | `${AutocompleteFieldInstantMessageAlias}`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldInstantMessageAlias}`
>;
