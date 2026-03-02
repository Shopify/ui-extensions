import {createRemoteComponent} from '@remote-ui/core';
import {
  AutocompleteProps,
  AnyAutocompleteField,
  AutocompleteFieldCreditCardAlias,
  AutocompleteFieldSecurityCodeAlias,
  InputProps,
  NumberConstraintsProps,
} from '../shared';

/**
 * Props for the NumberField component, a text input for numeric values.
 * Inherits standard input props, number constraints (min, max, step),
 * autocomplete support, and field decoration props.
 *
 * @publicDocs
 */
export interface NumberFieldProps
  extends InputProps<number>,
    NumberConstraintsProps,
    AutocompleteProps<NumberAutocompleteField> {
  /**
   * The type of virtual keyboard displayed on touch devices.
   *
   * - `decimal`: Shows a numeric keyboard with a decimal separator,
   *   suitable for values that may include fractional digits (for example, prices).
   * - `numeric`: Shows a numeric keyboard without a decimal separator,
   *   suitable for whole numbers (for example, quantities).
   *
   * @defaultValue 'decimal'
   */
  inputMode?: 'decimal' | 'numeric';
}

/**
 * Autocomplete field values valid for a number input. Includes one-time
 * codes and credit-card-related number fields such as card number and
 * security code.
 */
export type NumberAutocompleteField = Extract<
  AnyAutocompleteField,
  | 'one-time-code'
  | `${AutocompleteFieldCreditCardAlias}-number`
  | `${AutocompleteFieldCreditCardAlias}-${AutocompleteFieldSecurityCodeAlias}`
>;

/**
 * A text input for numeric values, with configurable decimal / integer
 * keyboard modes and number constraint validation.
 */
export const NumberField = createRemoteComponent<
  'NumberField',
  NumberFieldProps
>('NumberField');
