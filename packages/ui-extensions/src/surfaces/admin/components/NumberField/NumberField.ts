import {createRemoteComponent} from '@remote-ui/core';
import {
  AutocompleteProps,
  AnyAutocompleteField,
  AutocompleteFieldCreditCardAlias,
  AutocompleteFieldSecurityCodeAlias,
  InputProps,
} from '../shared';

/**
 * Props for the NumberField component, a text input for numeric values.
 * Inherits standard input props, number constraints (min, max, step),
 * autocomplete support, and field decoration props.
 */
export interface NumberFieldProps
  extends InputProps<number>,
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

  /**
   * The highest decimal or integer to be accepted for the field.
   * When used with `step` the value will round down to the max number.
   * Note: a user will still be able to use the keyboard to input a number higher than
   * the max. It is up to the developer to add appropriate validation.
   */
  max?: number;

  /**
   * The lowest decimal or integer to be accepted for the field.
   * When used with `step` the value will round up to the min number.
   * Note: a user will still be able to use the keyboard to input a number lower than
   * the min. It is up to the developer to add appropriate validation.
   *
   * @defaultValue 0
   */
  min?: number;

  /**
   * The amount the value can increase or decrease by. This can be an integer or decimal.
   * If a `max` or `min` is specified with `step` when increasing/decreasing the value
   * via the buttons, the final value will always round to the `max` or `min`
   * rather than the closest valid amount.
   *
   * @defaultValue 1
   */
  step?: number;
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
