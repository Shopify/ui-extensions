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
    AutocompleteProps<MoneyAutocompleteField> {
  /**
   * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code associated with the monetary value.
   * This code is included in the `Money` object returned by `onChange`.
   * For example, `'USD'` for US Dollars or `'EUR'` for Euros.
   */
  currencyCode?: CurrencyCode;
}

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

/**
 * The supported monetary currencies from [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
 */
export type CurrencyCode =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'CAD'
  | 'AFN'
  | 'ALL'
  | 'DZD'
  | 'AOA'
  | 'ARS'
  | 'AMD'
  | 'AWG'
  | 'AUD'
  | 'BBD'
  | 'AZN'
  | 'BDT'
  | 'BSD'
  | 'BHD'
  | 'BIF'
  | 'BZD'
  | 'BMD'
  | 'BTN'
  | 'BAM'
  | 'BRL'
  | 'BOB'
  | 'BWP'
  | 'BND'
  | 'BGN'
  | 'MMK'
  | 'KHR'
  | 'CVE'
  | 'KYD'
  | 'XAF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'KMF'
  | 'CDF'
  | 'CRC'
  | 'HRK'
  | 'CZK'
  | 'DKK'
  | 'DOP'
  | 'XCD'
  | 'EGP'
  | 'ETB'
  | 'XPF'
  | 'FJD'
  | 'GMD'
  | 'GHS'
  | 'GTQ'
  | 'GYD'
  | 'GEL'
  | 'HTG'
  | 'HNL'
  | 'HKD'
  | 'HUF'
  | 'ISK'
  | 'INR'
  | 'IDR'
  | 'ILS'
  | 'IQD'
  | 'JMD'
  | 'JPY'
  | 'JEP'
  | 'JOD'
  | 'KZT'
  | 'KES'
  | 'KWD'
  | 'KGS'
  | 'LAK'
  | 'LVL'
  | 'LBP'
  | 'LSL'
  | 'LRD'
  | 'LTL'
  | 'MGA'
  | 'MKD'
  | 'MOP'
  | 'MWK'
  | 'MVR'
  | 'MXN'
  | 'MYR'
  | 'MUR'
  | 'MDL'
  | 'MAD'
  | 'MNT'
  | 'MZN'
  | 'NAD'
  | 'NPR'
  | 'ANG'
  | 'NZD'
  | 'NIO'
  | 'NGN'
  | 'NOK'
  | 'OMR'
  | 'PAB'
  | 'PKR'
  | 'PGK'
  | 'PYG'
  | 'PEN'
  | 'PHP'
  | 'PLN'
  | 'QAR'
  | 'RON'
  | 'RUB'
  | 'RWF'
  | 'WST'
  | 'SAR'
  | 'RSD'
  | 'SCR'
  | 'SGD'
  | 'SDG'
  | 'SYP'
  | 'ZAR'
  | 'KRW'
  | 'SSP'
  | 'SBD'
  | 'LKR'
  | 'SRD'
  | 'SZL'
  | 'SEK'
  | 'CHF'
  | 'TWD'
  | 'THB'
  | 'TZS'
  | 'TTD'
  | 'TND'
  | 'TRY'
  | 'TMT'
  | 'UGX'
  | 'UAH'
  | 'AED'
  | 'UYU'
  | 'UZS'
  | 'VUV'
  | 'VND'
  | 'XOF'
  | 'YER'
  | 'ZMW'
  | 'BYN'
  | 'BYR'
  | 'DJF'
  | 'ERN'
  | 'FKP'
  | 'GIP'
  | 'GNF'
  | 'IRR'
  | 'KID'
  | 'LYD'
  | 'MRU'
  | 'SLL'
  | 'SHP'
  | 'SOS'
  | 'STD'
  | 'STN'
  | 'TJS'
  | 'TOP'
  | 'VED'
  | 'VEF'
  | 'VES'
  | 'XXX';
