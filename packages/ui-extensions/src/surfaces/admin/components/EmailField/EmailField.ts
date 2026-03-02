import {createRemoteComponent} from '@remote-ui/core';
import {
  AutocompleteProps,
  AnyAutocompleteField,
  AutocompleteAddressGroup,
  InputProps,
  MinMaxLengthProps,
} from '../shared';

/**
 * Props for the EmailField component, a text input optimized for email
 * addresses. It inherits common input props (like `label`, `value`,
 * `onChange`, and `error`) from `InputProps`, length validation from
 * `MinMaxLengthProps`, and browser autofill hints from `AutocompleteProps`.
 *
 * @publicDocs
 */
export interface EmailFieldProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<EmailAutocompleteField> {}

/**
 * Autocomplete field values that are valid for an email input. Supports
 * `'email'` on its own, or an address-group-scoped variant like
 * `'shipping email'` or `'billing email'`.
 */
export type EmailAutocompleteField = Extract<
  AnyAutocompleteField,
  'email' | `${AutocompleteAddressGroup} email`
>;

/**
 * A text input optimized for email addresses, with appropriate keyboard
 * hints and browser autofill support.
 */
export const EmailField = createRemoteComponent<'EmailField', EmailFieldProps>(
  'EmailField',
);
