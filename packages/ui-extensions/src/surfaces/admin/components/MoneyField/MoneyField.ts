import {createRemoteComponent} from '@remote-ui/core';
import type {
  AutocompleteProps,
  AnyAutocompleteField,
  InputProps,
  NumberConstraintsProps,
  Money,
} from '../shared';

export interface MoneyFieldProps
  extends InputProps<number | Money>,
    NumberConstraintsProps,
    AutocompleteProps<MoneyAutocompleteField> {}

export type MoneyAutocompleteField = Extract<
  AnyAutocompleteField,
  'transaction-amount'
>;

export const MoneyField = createRemoteComponent<'MoneyField', MoneyFieldProps>(
  'MoneyField',
);
