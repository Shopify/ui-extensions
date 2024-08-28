import type {
  AddressAutocompleteSuggestion,
  AddressFormField,
  AutocompleteAddress,
} from './shared';

export interface AddressAutocompleteFormatSuggestionApi {
  /**
   * The autocomplete suggestion that the buyer selected during checkout.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  target: Target;
}

interface Target {
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

  selectedSuggestion: AddressAutocompleteSuggestion;
}

export interface AddressAutocompleteFormatSuggestionOutput {
  /**
   * The formatted address that will be used to populate the native address fields.
   */
  formattedAddress: AutocompleteAddress;
}
