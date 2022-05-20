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

export type AutocompleteGroup = 'shipping' | 'billing' | 'location';

export type AutocompleteField =
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'credit-card-name'
  | 'credit-card-given-name'
  | 'credit-card-additional-name'
  | 'credit-card-family-name'
  | 'credit-card-number'
  | 'credit-card-expiry'
  | 'credit-card-expiry-month'
  | 'credit-card-expiry-year'
  | 'credit-card-security-code'
  | 'credit-card-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'birthday'
  | 'birthday-day'
  | 'birthday-month'
  | 'birthday-year'
  | 'sex'
  | 'url'
  | 'photo'
  | 'telephone'
  | 'telephone-country-code'
  | 'telephone-national'
  | 'telephone-area-code'
  | 'telephone-local'
  | 'telephone-local-prefix'
  | 'telephone-local-suffix'
  | 'telephone-extension'
  | 'email'
  | 'instant-message'
  | 'home telephone'
  | 'home telephone-country-code'
  | 'home telephone-national'
  | 'home telephone-area-code'
  | 'home telephone-local'
  | 'home telephone-local-prefix'
  | 'home telephone-local-suffix'
  | 'home telephone-extension'
  | 'home email'
  | 'home instant-message'
  | 'work telephone'
  | 'work telephone-country-code'
  | 'work telephone-national'
  | 'work telephone-area-code'
  | 'work telephone-local'
  | 'work telephone-local-prefix'
  | 'work telephone-local-suffix'
  | 'work telephone-extension'
  | 'work email'
  | 'work instant-message'
  | 'mobile telephone'
  | 'mobile telephone-country-code'
  | 'mobile telephone-national'
  | 'mobile telephone-area-code'
  | 'mobile telephone-local'
  | 'mobile telephone-local-prefix'
  | 'mobile telephone-local-suffix'
  | 'mobile telephone-extension'
  | 'mobile email'
  | 'mobile instant-message'
  | 'fax telephone'
  | 'fax telephone-country-code'
  | 'fax telephone-national'
  | 'fax telephone-area-code'
  | 'fax telephone-local'
  | 'fax telephone-local-prefix'
  | 'fax telephone-local-suffix'
  | 'fax telephone-extension'
  | 'fax email'
  | 'fax instant-message'
  | 'pager telephone'
  | 'pager telephone-country-code'
  | 'pager telephone-national'
  | 'pager telephone-area-code'
  | 'pager telephone-local'
  | 'pager telephone-local-prefix'
  | 'pager telephone-local-suffix'
  | 'pager telephone-extension'
  | 'pager email'
  | 'pager instant-message';

export type Breakpoint = 'base' | 'small' | 'medium' | 'large';

export type Responsive<T> = {[key in Breakpoint]?: T};
export type CSSShorthand<CSSValue> =
  | CSSValue
  | [CSSValue, CSSValue]
  | [CSSValue, CSSValue, CSSValue, CSSValue];

type BorderColor = 'base' | 'emphasized';
type BorderRadius = 'base' | 'tight' | 'loose' | 'fullyRounded' | 'none';
type BorderStyle = 'base' | 'dotted' | 'none';
type BorderWidth = 'base' | 'medium';

export interface Bordered {
  /**
   * Adjust the border style.
   *
   * To shorten the code, it is possible to specify all the border style properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base`
   * - [`base`, `none`] means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none`
   * - [`base`, `none`, `dotted`, `base`] means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base`
   */
  border?: CSSShorthand<BorderStyle> | Responsive<CSSShorthand<BorderStyle>>;

  /**
   * Adjust the border width.
   *
   * To shorten the code, it is possible to specify all the border width properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base`
   * - [`base`, `thick`] means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `thick`
   * - [`base`, `thick`, `thick`, `base`] means blockStart border width is `base`, inlineEnd border width is `thick`, blockEnd border width is `thick` and  blockStart border width is `base`
   */
  borderWidth?:
    | CSSShorthand<BorderWidth>
    | Responsive<CSSShorthand<BorderWidth>>;

  /**
   * Adjust the border color.
   */
  borderColor?: BorderColor | Responsive<BorderColor>;

  /**
   * Adjust the border radius.
   *
   * To shorten the code, it is possible to specify all the border width properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border radii are `base`
   * - [`base`, `none`] means blockStart and blockEnd border radii are `base`, inlineStart and inlineEnd border radii are `none`
   * - [`base`, `none`, `tight`, `base`] means blockStart border radius is `base`, inlineEnd border radius is `none`, blockEnd border radius is `tight` and  blockStart border radius is `base`
   */
  borderRadius?:
    | CSSShorthand<BorderRadius>
    | Responsive<CSSShorthand<BorderRadius>>;
}

export type AccessibilityRole =
  /** Used to indicate the primary content. */
  | 'main'
  /** Used to indicate the component is a header. */
  | 'header'
  /** Used to display information such as copyright information, navigation links, and privacy statements. */
  | 'footer'
  /** Used to indicate a generic section. */
  | 'section'
  /** Used to designate a supporting section that relates to the main content. */
  | 'complementary'
  /** Used to identify major groups of links used for navigating. */
  | 'navigation'
  /** Used to identify a list of ordered items. */
  | 'orderedList'
  /** Used to identify an item inside a list of items. */
  | 'listItem'
  /** Used to identify a list of unordered items. */
  | 'unorderedList'
  /** Used to indicates the component acts as a divider that separates and distinguishes sections of content. */
  | 'separator'
  /** Used to define a live region containing advisory information for the user that is not important enough to be an alert. */
  | 'status'
  /** Used for important, and usually time-sensitive, information. */
  | 'alert';

export type UnitSuffix = 'fr' | '%';
export type Unit<Suffix extends UnitSuffix> = `${number}${Suffix}`;

/**
 * Takes a base type (Base) and a list of accepted combinations of
 * its properties (AcceptedCombinations) and returns a new type
 * that only allows the properties listed in AcceptedCombinations
 * to be used together.
 *
 * Example:
 *
 * We want to accept either aspectRatio or width and height on a type,
 * but not both simultaneously:
 *
 * type BaseDimensions = {
 *   aspectRatio: number,
 *   height: number,
 *   width: number,
 * };
 *
 * type OneDimension = MultiPick<BaseDimensions, ['height' | 'width', 'aspectRatio']>;
 *
 * The OneDimension type would be equivalent to:
 *
 * {
 *   aspectRatio?: number,
 *   height?: never,
 *   width?: never,
 * } | {
 *   aspectRatio?: never,
 *   height?: number,
 *   width?: number,
 * }
 *
 */
export type MultiPick<Base, AcceptedCombinations extends (keyof Base)[]> = {
  [Combination in keyof AcceptedCombinations]: {
    [Accepted in AcceptedCombinations[Combination] as Accepted extends keyof Base
      ? Accepted
      : never]?: Accepted extends keyof Base ? Base[Accepted] : never;
  } & {
    [NotAccepted in Exclude<
      keyof Base,
      AcceptedCombinations[Combination]
    >]?: never;
  };
}[number];
