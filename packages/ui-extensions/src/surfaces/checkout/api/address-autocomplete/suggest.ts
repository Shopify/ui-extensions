import type {CountryCode} from '../../../checkout';

import type {AddressAutocompleteSuggestion, AddressFormField} from './shared';

export interface AddressAutocompleteSuggestApi {
  /**
   * The signal that the extension should listen to for cancellation requests.
   *
   * If the signal is aborted, the extension should cancel any ongoing requests.
   * The signal will be aborted either when the buyer navigates away from the
   * address field or when the debounced query value changes.
   *
   * Pass this signal to any asynchronous operations that need to be cancelled,
   * like `fetch`.
   */
  signal: AbortSignal;

  /**
   * The current state of the address form that the buyer is interacting with.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  target: Target;
}

interface Target {
  /**
   * The current value of the `field` the buyer is interacting with.
   *
   * @example "123 M"
   */
  value: string;

  /**
   * The field of the address form that the buyer is interacting with.
   *
   * This field can be one of `address1`, `zip`, or `streetName` depending on the country
   * selected by the buyer during checkout.
   *
   * @example "address1"
   */
  field: Extract<AddressFormField, 'address1' | 'zip' | 'streetName'>;

  /**
   * The fields of the address form that are visible to the buyer.
   *
   * @example ['address1', 'address2', 'city', 'company', 'countryCode', 'provinceCode', 'zip']
   *
   * TODO('nabeel.ahsen@shopify.com): Remove this once this feature is supported by checkout-web.
   * - DO NOT SHIP TO `shopify/ui-extensions`!!
   * - Make this a required field once the feature is supported by checkout-web.
   */
  fields?: AddressFormField[];

  /**
   * The `countryCode` selected in the address form that the buyer is interacting with.
   *
   * This code is in ISO 3166 Alpha-2 format representing the buyer's country. Refer to https://www.iso.org/iso-3166-country-codes.html.
   *
   * @example 'CA' for Canada.
   */
  selectedCountryCode?: CountryCode;
}

export interface AddressAutocompleteSuggestOutput {
  /**
   * An array of address autocomplete suggestions to show to the buyer.
   *
   * > Note: Only the first five suggestions will be displayed to the buyer.
   */
  suggestions: AddressAutocompleteSuggestion[];
}
