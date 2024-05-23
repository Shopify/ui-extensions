import type {MailingAddress} from '../shared';

export interface AddressAutocompleteSuggestApi {
  target: {
    /**
     * The input that the user has typed so far into the address field.
     *
     * @example "123 M"
     */
    value: string;

    /**
     * The address field that the buyer is interacting with.
     *
     * @example "address1"
     */
    field: AutocompleteAddress;

    /**
     * An AbortSignal that may be used to cancel in-flight network requests.
     * This signal is sent when the buyer has stopped interacting with the address field.
     */
    signal: AbortSignal;
  };
}
export interface AddressAutocompleteSuggestion {
  /**
   * The human-readable autocomplete suggestion text. This text is
   * shown to the buyer as-is. No attempts will be made to parse it.
   *
   * @example "123 Main St, Toronto, ON, CA"
   */
  description: string;

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
   * A list of substrings that matched the original search query.
   *
   * If `matchedSubstrings` are provided, then they will be used to highlight the substrings
   * of the suggestions that matched the original search query.
   *
   * @example [{offset: 0, length: 4}]
   */
  matchedSubstrings?: MatchedSubstring[];

  /**
   * The formatted address that will auto-fill the remaining address fields.
   *
   * If this value is returned for every suggestion, then the
   * `purchase.address-autocomplete.format-suggestion` extension target is not needed.
   */
  formattedAddress?: AutocompleteAddress;
}

interface MatchedSubstring {
  /**
   * The start location of the matched substring in the suggestion description text.
   */
  offset: number;
  /**
   * The length of the matched substring in the suggestion description text.
   */
  length: number;
}

/**
 * A partial mailing address with only fields relevant to address autocomplete.
 * All fields are optional
 */
type AutocompleteAddress = Partial<
  Pick<
    MailingAddress,
    'address1' | 'address2' | 'city' | 'provinceCode' | 'zip' | 'countryCode'
  >
>;
