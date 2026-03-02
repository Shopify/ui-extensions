import {createRemoteComponent} from '@remote-ui/core';
import type {
  AutocompleteProps,
  AnyAutocompleteField,
  InputProps,
  NumberConstraintsProps,
  Money,
} from '../shared';

/**
 * Props for the MoneyField component, a specialized input for entering
 * monetary values. It extends standard input props with number constraints
 * and autocomplete support for transaction amounts.
 *
 * @publicDocs
 */
export interface MoneyFieldProps
  extends InputProps<number | Money>,
    NumberConstraintsProps,
    AutocompleteProps<MoneyAutocompleteField> {}

/**
 * Autocomplete field types relevant to monetary inputs.
 */
export type MoneyAutocompleteField = Extract<
  AnyAutocompleteField,
  'transaction-amount'
>;

/**
 * A specialized input for entering monetary values, with currency
 * formatting and symbol support.
 */
export const MoneyField = createRemoteComponent<'MoneyField', MoneyFieldProps>(
  'MoneyField',
);
