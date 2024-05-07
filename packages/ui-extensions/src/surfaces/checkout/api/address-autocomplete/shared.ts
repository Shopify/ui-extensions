import type {MailingAddress} from '../../../checkout';

/**
 * A partial mailing address with only fields relevant to address autocomplete.
 * All fields are optional
 */
export interface AutocompleteAddress
  extends Pick<
    MailingAddress,
    'address1' | 'address2' | 'city' | 'provinceCode' | 'zip' | 'countryCode'
  > {}

export interface AddressAutocompleteSuggestion {
  /**
   * The address suggestion text presented to the buyer in the list of autocomplete suggestions.
   *
   * This text is shown to the buyer as-is. No attempts will be made to parse it.
   *
   * @example "123 Main St, Toronto, ON, CA"
   */
  label: string;

  /**
   * A textual identifier that uniquely identifies an autocomplete suggestion
   * or address. This identifier may be used to search for a formatted address.
   *
   * @example "35ef8d55-dceb-4ed8-847b-2f2fc7472f14"
   */
  id?: string;

  /**
   * If provided, this will be used to highlight the substrings
   * of the suggestions that matched the original search query.
   *
   * @example [{offset: 0, length: 4}]
   */
  matchedSubstrings?: MatchedSubstring[];

  /**
   * If provided, the autocomplete field will use the formatted address to
   * auto-fill the remaining address fields.
   *
   * If this value is returned for every suggestion, there is no need to implement
   * the `purchase.address-autocomplete.format-suggestion` extension target.
   */
  formattedAddress?: AutocompleteAddress;
}

export interface MatchedSubstring {
  /**
   * The start location of the matched substring in the suggestion label text.
   */
  offset: number;
  /**
   * The length of the matched substring in the suggestion label text.
   */
  length: number;
}
