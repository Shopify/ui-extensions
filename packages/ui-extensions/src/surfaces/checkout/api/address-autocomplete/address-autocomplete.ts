import type {MailingAddress} from '../shared';

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
   * The current state of the address field that the buyer is interacting with.
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
   * The `MailingAddress` field that the buyer is interacting with.
   *
   * @example "address1"
   */
  field: 'address1' | 'zip';
}

export interface AddressAutocompleteSuggestion {
  /**
   * The human-readable autocomplete suggestion text. This text is
   * shown to the buyer as-is. No attempts will be made to parse it.
   *
   * @example "123 Main St, Toronto, ON, CA"
   */
  label: string;

  /**
   * Optional.
   *
   * A textual identifier that uniquely identifies an autocomplete suggestion
   * or address. This identifier may be used to search for a formatted address.
   *
   * @example "35ef8d55-dceb-4ed8-847b-2f2fc7472f14"
   */
  id?: string;

  /**
   * Optional.
   *
   * If provided, this will be used to highlight the substrings
   * of the suggestions that matched the original search query.
   *
   * @example [{offset: 0, length: 4}]
   */
  matchedSubstrings?: MatchedSubstring[];

  /**
   * Optional.
   *
   * If an extension returns this along with a suggestion, the autocomplete
   * field will use this value to auto-fill the remaining address fields.
   *
   * If this value is returned for every suggestion, there is no need to implement
   * the `purchase.address-autocomplete.format-suggestion` extension target.
   */
  formattedAddress?: AutocompleteAddress;
}

interface MatchedSubstring {
  /**
   * The start location of the matched substring in the suggestion label text.
   */
  offset: number;
  /**
   * The length of the matched substring in the suggestion label text.
   */
  length: number;
}

export interface AddressAutocompleteSuggestApiOutput {
  /**
   * An array of address autocomplete suggestions to show to the buyer.
   */
  suggestions: AddressAutocompleteSuggestion[];
}

/**
 * A partial mailing address with only fields relevant to address autocomplete.
 * All fields are optional
 */
interface AutocompleteAddress
  extends Pick<
    MailingAddress,
    'address1' | 'address2' | 'city' | 'provinceCode' | 'zip' | 'countryCode'
  > {}
export interface AddressAutocompleteFormatSuggestionApi {
  /**
   * The selected autocomplete suggestion that the buyer selected during checkout.
   */
  target: {
    selectedSuggestion: AddressAutocompleteSuggestion;
  };
}

export interface AddressAutocompleteFormatSuggestionApiOutput {
  /**
   * The formatted address that will be used to populate the native address fields.
   */
  formattedAddress: AutocompleteAddress;
}
