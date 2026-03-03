import {createRemoteComponent} from '@remote-ui/core';
import {
  AutocompleteProps,
  AnyAutocompleteField,
  InputProps,
  MinMaxLengthProps,
} from '../shared';

/**
 * Props for the PasswordField component, a text input that masks its
 * content for secure entry of sensitive values like passwords or PINs.
 * It extends standard input props with min/max length constraints and
 * autocomplete support for password managers.
 *
 * @publicDocs
 */
export interface PasswordFieldProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<PasswordAutocompleteField> {}

/**
 * Autocomplete field types relevant to password inputs.
 *
 * - `new-password`: hints that the user is creating a new password, allowing
 *   password managers to suggest a strong generated password.
 * - `current-password`: hints that the user is entering an existing password,
 *   allowing password managers to autofill a saved credential.
 */
export type PasswordAutocompleteField = Extract<
  AnyAutocompleteField,
  'new-password' | 'current-password'
>;

/** A PasswordField component for secure, masked text entry. */
export const PasswordField = createRemoteComponent<
  'PasswordField',
  PasswordFieldProps
>('PasswordField');
