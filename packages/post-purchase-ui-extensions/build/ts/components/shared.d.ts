/**
 * A descriptor for selecting the data a field would like to receive during
 * autocomplete. This attribute is modeled off of a limited set of the autocomplete
 * values supported in browsers.
 *
 * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens
 */
export interface Autocomplete {
    /**
     * The contact information “group” the autocomplete data should be sourced from.
     */
    group?: AutocompleteGroup;
    /**
     * The type of data that should be inserted into a field supporting autocomplete.
     */
    field: AutocompleteField;
}
export declare type AutocompleteGroup = 'shipping' | 'billing';
export declare type AutocompleteField = 'name' | 'honorific-prefix' | 'given-name' | 'additional-name' | 'family-name' | 'honorific-suffix' | 'nickname' | 'username' | 'new-password' | 'current-password' | 'one-time-code' | 'organization-title' | 'organization' | 'street-address' | 'address-line1' | 'address-line2' | 'address-line3' | 'address-level4' | 'address-level3' | 'address-level2' | 'address-level1' | 'country' | 'country-name' | 'postal-code' | 'credit-card-name' | 'credit-card-given-name' | 'credit-card-additional-name' | 'credit-card-family-name' | 'credit-card-number' | 'credit-card-expiry' | 'credit-card-expiry-month' | 'credit-card-expiry-year' | 'credit-card-security-code' | 'credit-card-type' | 'transaction-currency' | 'transaction-amount' | 'language' | 'birthday' | 'birthday-day' | 'birthday-month' | 'birthday-year' | 'sex' | 'url' | 'photo' | 'telephone' | 'telephone-country-code' | 'telephone-national' | 'telephone-area-code' | 'telephone-local' | 'telephone-local-prefix' | 'telephone-local-suffix' | 'telephone-extension' | 'email' | 'instant-message' | 'home telephone' | 'home telephone-country-code' | 'home telephone-national' | 'home telephone-area-code' | 'home telephone-local' | 'home telephone-local-prefix' | 'home telephone-local-suffix' | 'home telephone-extension' | 'home email' | 'home instant-message' | 'work telephone' | 'work telephone-country-code' | 'work telephone-national' | 'work telephone-area-code' | 'work telephone-local' | 'work telephone-local-prefix' | 'work telephone-local-suffix' | 'work telephone-extension' | 'work email' | 'work instant-message' | 'mobile telephone' | 'mobile telephone-country-code' | 'mobile telephone-national' | 'mobile telephone-area-code' | 'mobile telephone-local' | 'mobile telephone-local-prefix' | 'mobile telephone-local-suffix' | 'mobile telephone-extension' | 'mobile email' | 'mobile instant-message' | 'fax telephone' | 'fax telephone-country-code' | 'fax telephone-national' | 'fax telephone-area-code' | 'fax telephone-local' | 'fax telephone-local-prefix' | 'fax telephone-local-suffix' | 'fax telephone-extension' | 'fax email' | 'fax instant-message' | 'pager telephone' | 'pager telephone-country-code' | 'pager telephone-national' | 'pager telephone-area-code' | 'pager telephone-local' | 'pager telephone-local-prefix' | 'pager telephone-local-suffix' | 'pager telephone-extension' | 'pager email' | 'pager instant-message';
export declare type Breakpoint = 'base' | 'small' | 'medium' | 'large';
export declare type Responsive<T> = {
    [key in Breakpoint]?: T;
};
//# sourceMappingURL=shared.d.ts.map