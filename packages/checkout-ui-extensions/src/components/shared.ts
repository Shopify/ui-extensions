import {MaybeConditionalStyle} from '../style';

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

export type ShorthandProperty<Property> =
  | [Property, Property]
  | [Property, Property, Property, Property];

export type MaybeShorthandProperty<Property> =
  | Property
  | ShorthandProperty<Property>;

export type BorderRadius = 'base' | 'tight' | 'loose' | 'fullyRounded' | 'none';
export type BorderStyle = 'base' | 'dotted' | 'none';
export type BorderWidth = 'base' | 'medium';

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
  border?: MaybeConditionalStyle<MaybeShorthandProperty<BorderStyle>>;

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
  borderWidth?: MaybeConditionalStyle<MaybeShorthandProperty<BorderWidth>>;

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
  borderRadius?: MaybeConditionalStyle<MaybeShorthandProperty<BorderRadius>>;
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
  | 'alert'
  /** Used to indicate that an image is decorative and should be hidden from assistive technologies. */
  | 'decorative'
  /** Used to strip the semantic meaning of an element, but leave the visual styling intact. */
  | 'presentation';

export type NonPresentationalAccessibilityRole = Exclude<
  AccessibilityRole,
  'decorative' | 'presentation'
>;
export type ViewLikeAccessibilityRole =
  | NonPresentationalAccessibilityRole
  | [NonPresentationalAccessibilityRole, NonPresentationalAccessibilityRole];

export type TextAccessibilityRole =
  /**
   * Indicate the text is a contact information. Typically used for addresses.
   */
  | 'address'
  /**
   * Indicate the text has been deleted. Typically used for discounted prices.
   */
  | 'deletion'
  /**
   * Indicate the text is marked or highlighted and relevant to the buyer's current action.
   * Typically used to indicate the characters that matched a search query.
   */
  | 'marking'
  /**
   * Indicate the text is an abbreviation or acronym. Use the “for” option to
   * provide a description of the abbreviation.
   */
  | {type: 'abbreviation'; for?: string}
  /**
   * Override the text directionality. Typically used for email and phone numbers.
   */
  | {type: 'directional-override'; direction: 'ltr' | 'rtl'}
  /**
   * Indicate the text is a date, a time or a duration. Use the “machineReadable” option
   * to help browsers, tools or software understand the human-readable date. Valid format
   * for “machineReadable” can be found here:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#Valid_datetime_Values
   */
  | {type: 'datetime'; machineReadable?: string};

export type Status =
  /**
   * Use to convey general information or actions that aren't critical or tied to
   * a particular action.
   */
  | 'info'
  /**
   * Use rarely, only if you need additional visual confirmation that a
   * non-standard action has been completed successfully, for example adding an
   * item to an order as an upsell.
   */
  | 'success'
  /**
   * Use to display information that needs attention or that customers should
   * take action on. Seeing these banners can be stressful for customers so be
   * cautious about using them. Should not block progress to next step.
   */
  | 'warning'
  /**
   * Use to communicate problems that have to be resolved immediately for
   * customers to complete a task. For example, using a different payment method
   * if card details couldn't be processed. Seeing these banners can be stressful
   * for customers so be cautious about using them.
   */
  | 'critical';

export type Size =
  | 'extraSmall'
  | 'small'
  | 'base'
  | 'large'
  | 'extraLarge'
  | 'fill';

export type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';

export type Alignment = 'start' | 'center' | 'end';
export type InlineAlignment = 'start' | 'center' | 'end';
export type BlockAlignment = Alignment | 'baseline';

export type Background = 'transparent' | 'color1' | 'color2' | 'color3';
export type BackgroundPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
export type BackgroundFit = 'cover' | 'contain';

export type Appearance =
  /** Use to convey emphasis and draw attention to the icon.*/
  | 'accent'
  /** Use to convey that the icon is pressable, hoverable or otherwise interactive.*/
  | 'interactive'
  /** Use to convey a subdued or disabled state for the icon.*/
  | 'subdued'
  /** Use to convey icon is informative or has information.*/
  | 'info'
  /** Use to convey a successful interaction.*/
  | 'success'
  /** Use to convey something needs attention or an action needs to be taken.*/
  | 'warning'
  /** Use to convey a problem has arisen.*/
  | 'critical'
  /** Will take the color of its parent*/
  | 'monochrome';

export type Direction = 'inline' | 'block';

export type Fit = 'cover' | 'contain';

export type GridItemSize =
  | 'auto'
  | 'fill'
  | number
  // eslint-disable-next-line prettier/prettier
  | `${number}fr`
  | `${number}%`;

export type Columns = GridItemSize[] | GridItemSize;
export type Rows = GridItemSize[] | GridItemSize;

/**
 * Use to emphasize a word or a group of words compared to other nearby text.
 */
export type Emphasis =
  /**
   * Indicate emphatic stress.
   * By default the text will be italic and render a `<em>` tag in an HTML host.
   */
  | 'stress'
  /**
   *  Indicate an offset from the normal prose of the text. Typically used to indicate
   * a foreign word, fictional character thoughts, or when the text refers to the definition of a word
   * instead of representing its semantic meaning.
   * By default the text will be italic and render a `<i>` tag in an HTML host.
   */
  | 'offset'
  /**
   * Indicate strong importance, seriousness, or urgency.
   * By default the text will be bold and render a `<strong>` tag in an HTML host.
   */
  | 'strong';

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
