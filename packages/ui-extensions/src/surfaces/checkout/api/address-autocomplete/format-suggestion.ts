import type {AcceptedAddressInputField} from '../../../../shared';

import type {
  AddressAutocompleteSuggestion,
  AutocompleteAddress,
} from './shared';

/** @publicDocs */
export interface AddressAutocompleteFormatSuggestionApi {
  /**
   * The autocomplete suggestion that the buyer selected during checkout.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  target: Target;
}

interface Target {
  selectedSuggestion: AddressAutocompleteSuggestion;

  /**
   * The inputs the address form being populated accepts. Use it to decide
   * which fields to fill; the output isn't validated against it. `undefined`
   * until the address format loads.
   */
  acceptedAddressInputFields?: AcceptedAddressInputField[];
}

/** @publicDocs */
export interface AddressAutocompleteFormatSuggestionOutput {
  /**
   * The formatted address that will be used to populate the native address fields.
   */
  formattedAddress: AutocompleteAddress;
}
