import {createRemoteComponent} from '@remote-ui/core';
import {
  AutocompleteProps,
  AnyAutocompleteField,
  AutocompleteFieldCreditCardAlias,
  AutocompleteFieldSecurityCodeAlias,
  InputProps,
} from '../shared';

export interface NumberFieldProps
  extends InputProps<number>,
    AutocompleteProps<NumberAutocompleteField> {
  /**
   * Sets the virtual keyboard.
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

export type NumberAutocompleteField = Extract<
  AnyAutocompleteField,
  | 'one-time-code'
  | `${AutocompleteFieldCreditCardAlias}-number`
  | `${AutocompleteFieldCreditCardAlias}-${AutocompleteFieldSecurityCodeAlias}`
>;

export const NumberField = createRemoteComponent<
  'NumberField',
  NumberFieldProps
>('NumberField');
