import type {RemoteFragment} from '@remote-ui/core';

import type {
  MaybeConditionalStyle,
  MaybeResponsiveConditionalStyle,
} from '../style/types';

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

export type AutocompleteGroup = 'shipping' | 'billing';

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

export type Breakpoint = 'base' | 'extraSmall' | 'small' | 'medium' | 'large';

export type Display = 'none' | 'auto' | 'inline' | 'block';

/**
 * A tuple type that accepts two or four values following the CSS shorthand
 * convention for box edges.
 *
 * - `[T, T]`: The first value applies to block-start and block-end, the second to inline-start and inline-end.
 * - `[T, T, T, T]`: Values apply to block-start, inline-end, block-end, and inline-start respectively.
 */
export type ShorthandProperty<T> = [T, T] | [T, T, T, T];

/**
 * A type that accepts either a single value applied to all edges or a
 * shorthand tuple for per-edge control.
 *
 * - `T`: A single value applied uniformly to all edges.
 * - `[T, T]`: The first value applies to block-start and block-end, the second to inline-start and inline-end.
 * - `[T, T, T, T]`: Values apply to block-start, inline-end, block-end, and inline-start respectively.
 */
export type MaybeShorthandProperty<T> = T | ShorthandProperty<T>;

/** @deprecated These values are deprecated and will eventually be removed.
 * Use CornerRadius instead
 */
export type BorderRadius = 'base' | 'tight' | 'loose' | 'fullyRounded' | 'none';
/**
 * A keyword that maps to a predefined border style from the design system.
 *
 * - `base`: A solid border line, suitable for most use cases.
 * - `dashed`: A dashed border line, often used for drop zones or placeholder boundaries.
 * - `dotted`: A dotted border line.
 * - `none`: No border is rendered.
 */
export type BorderStyle = 'base' | 'dashed' | 'dotted' | 'none';

/**
 * A keyword that maps to a predefined border width from the design system.
 *
 * - `base`: The default border width.
 * - `medium`: A medium border width, thicker than `base`.
 * - `thick`: The thickest available border width.
 */
export type BorderWidth = 'base' | 'medium' | 'thick';

/**
 * A keyword that maps to a predefined corner radius from the design system.
 *
 * - `base`: The default corner radius.
 * - `small`: A subtle corner radius, smaller than `base`.
 * - `large`: A pronounced corner radius, larger than `base`.
 * - `fullyRounded`: Fully rounds the corners into a pill or circle shape.
 * - `none`: No corner rounding; sharp square corners.
 */
export type CornerRadius =
  | 'base'
  | 'small'
  | 'large'
  | 'fullyRounded'
  | 'none'
  | CornerRadiusDeprecated;

/**
 * @deprecated Use the standard `CornerRadius` keywords instead.
 *
 * - `tight`: Use `small` instead.
 * - `loose`: Use `large` instead.
 */
export type CornerRadiusDeprecated = 'tight' | 'loose';

/**
 * Props for controlling the background appearance of a layout element.
 */
export interface BackgroundProps {
  /**
   * The background color of the element, set using a design-system keyword.
   *
   * - `transparent`: No background; the parent's background shows through.
   * - `base`: The standard surface background color.
   * - `subdued`: A muted background for de-emphasized or secondary content.
   *
   * @defaultValue 'transparent'
   */
  background?: MaybeConditionalStyle<Background>;

  /**
   * Sets one or multiple responsive background images using URLs.
   */
  backgroundImage?: MaybeConditionalStyle<string>;

  /**
   * Controls how the background image scales within its container.
   *
   * - `contain`: Scales the image to fit without cropping or stretching.
   * - `cover`: Scales the image to fill the container; the image may be cropped.
   */
  backgroundFit?: BackgroundFit;

  /**
   * Sets the initial position of the background image within its container.
   *
   * @defaultValue 'center'
   */
  backgroundPosition?: BackgroundPosition;

  /**
   * Controls how the background image is repeated within its container.
   *
   * - `repeat`: The image is tiled to fill the container.
   * - `noRepeat`: The image is displayed once without repetition.
   *
   * @defaultValue 'noRepeat'
   */
  backgroundRepeat?: BackgroundRepeat;
}

export interface BorderProps {
  /**
   * The border style of the element.
   *
   * To shorten the code, it is possible to specify all the border style properties in one property.
   *
   * For example:
   *
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base`
   *
   * - `['base', 'none']` means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none`
   *
   * - `['base', 'none', 'dotted', 'base']` means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base`
   */
  border?: MaybeResponsiveConditionalStyle<MaybeShorthandProperty<BorderStyle>>;

  /**
   * The border width of the element.
   *
   * To shorten the code, it is possible to specify all the border width properties in one property.
   *
   * For example:
   *
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base`
   *
   * - `['base', 'medium']` means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `medium`
   *
   * - `['base', 'medium', 'medium', 'base']` means blockStart border width is `base`, inlineEnd border width is `medium`, blockEnd border width is `medium` and  blockStart border width is `base`
   */
  borderWidth?: MaybeResponsiveConditionalStyle<
    MaybeShorthandProperty<BorderWidth>
  >;
}

export interface CornerProps {
  /**
   * @deprecated Use `cornerRadius` instead.
   *
   * The corner radius of the element. Accepts a single value for
   * all corners or a shorthand tuple for per-corner control.
   */
  borderRadius?: MaybeResponsiveConditionalStyle<
    MaybeShorthandProperty<CornerRadius>
  >;

  /**
   * The corner radius of the element.
   *
   * Provide a single value to apply the same corner radius to all four corners, two values to apply different corner radii to opposing corners, or four values to apply different corner radii to each individual corner.
   *
   * For example:
   *
   * - `base` means all 4 corner radii are `base`
   *
   * - `['base', 'none']` means the StartStart and EndEnd corner radii are `base`, StartEnd and EndStart corner radii are `none`.
   *    When the context’s language direction is left to right, StartStart and EndEnd corners are the top left and bottom right corners
   *    while StartEnd and EndStart corners are the top right and bottom left corners.
   *
   * - `['base', 'none', 'small', 'base']` means StartStart corner radius is `base`, StartEnd corner radius is `none`, EndEnd corner radius is `small` and  EndStart corner radius is `base`
   *
   * A `borderRadius` alias is available for this property. When both are specified, `cornerRadius` takes precedence.
   */
  cornerRadius?: MaybeResponsiveConditionalStyle<
    MaybeShorthandProperty<CornerRadius>
  >;
}

/**
 * Props for controlling the dimensions of a layout element. All sizing
 * props use logical (writing-mode-aware) properties rather than physical
 * `width` / `height` so that layouts adapt correctly to different
 * writing directions.
 */
export interface SizingProps {
  /**
   * The maximum block size (maximum height in horizontal writing modes).
   * The element won't grow taller than this value even if its content is longer.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's block size.
   * - `'fill'`: Takes all the available space.
   *
   * Learn more about the [max-block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size) property.
   */
  maxBlockSize?: MaybeResponsiveConditionalStyle<
    number | `${number}%` | 'fill'
  >;

  /**
   * The maximum inline size (maximum width in horizontal writing modes).
   * The element won't grow wider than this value.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's inline size.
   * - `'fill'`: Takes all the available space.
   *
   * Learn more about the [max-inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size) property.
   */
  maxInlineSize?: MaybeResponsiveConditionalStyle<
    number | `${number}%` | 'fill'
  >;

  /**
   * The minimum inline size (minimum width in horizontal writing modes).
   * The element won't shrink narrower than this value.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's inline size.
   * - `'fill'`: Takes all the available space.
   *
   * Learn more about the [min-inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size) property.
   */
  minInlineSize?: MaybeResponsiveConditionalStyle<
    number | `${number}%` | 'fill'
  >;

  /**
   * The minimum block size (minimum height in horizontal writing modes).
   * The element won't shrink smaller than this value even if its content is shorter.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's block size.
   * - `'fill'`: Takes all the available space.
   *
   * Learn more about the [min-block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size) property.
   */
  minBlockSize?: MaybeResponsiveConditionalStyle<
    number | `${number}%` | 'fill'
  >;
}

/**
 * Props for setting internal padding on a layout element. Accepts a
 * single spacing keyword applied to all edges or a shorthand tuple
 * for per-edge control.
 */
export interface SpacingProps {
  /**
   * The padding on all edges of the element, using a shorthand syntax.
   * You can specify one, two, or four values following the CSS shorthand convention.
   *
   * - `T`: A single value applied uniformly to all edges.
   * - `[T, T]`: The first value applies to block-start and block-end, the second to inline-start and inline-end.
   * - `[T, T, T, T]`: Values apply to block-start, inline-end, block-end, and inline-start respectively.
   */
  padding?: MaybeResponsiveConditionalStyle<MaybeShorthandProperty<Spacing>>;
}

/**
 * The set of accessibility roles that can be applied to components
 * to convey semantic meaning to assistive technologies. Each role maps
 * to a corresponding HTML element or ARIA role in web-based hosts.
 *
 * - `main`: The primary content of the page.
 * - `header`: A header section of the page.
 * - `footer`: A section for copyright information, navigation links, and privacy statements.
 * - `section`: A generic section; should have a heading or accessible label.
 * - `complementary`: A supporting section related to the main content.
 * - `navigation`: A major group of navigation links.
 * - `orderedList`: A list of ordered items.
 * - `listItem`: An item inside a list.
 * - `unorderedList`: A list of unordered items.
 * - `separator`: A divider separating sections of content.
 * - `status`: A live region with advisory information that isn't urgent enough to be an alert.
 * - `alert`: Important, usually time-sensitive information.
 * - `decorative`: Marks the element as purely visual; assistive technologies skip it.
 * - `presentation`: Strips semantic meaning but leaves visual styling intact.
 */
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

export type NonPresentationalAccessibilityRole =
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

export type ViewLikeAccessibilityRole =
  | NonPresentationalAccessibilityRole
  | [NonPresentationalAccessibilityRole, NonPresentationalAccessibilityRole];

export type ButtonAccessibilityRole = 'button' | 'submit';

export type TextAccessibilityRole =
  /**
   * Indicate the text is contact information. Typically used for addresses.
   */
  | 'address'
  /**
   * Indicate the text has been deleted. Typically used for discounted prices.
   */
  | 'deletion'
  /**
   * Indicate the text is marked or highlighted and relevant to the buyer’s current action.
   * Typically used to indicate the characters that matched a search query.
   */
  | 'marking'
  /**
   * Indicate the text is an abbreviation or acronym. Use the `for` option to
   * provide a description of the abbreviation.
   */
  | {type: 'abbreviation'; for?: string}
  /**
   * Override the text directionality. Typically used for email and phone numbers.
   */
  | {type: 'directional-override'; direction: 'ltr' | 'rtl'}
  /**
   * Indicate the text is a date, a time or a duration. Use the `machineReadable` option
   * to help browsers, tools or software understand the human-readable date. The valid
   * format for `machineReadable` can be found here:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#Valid_datetime_Values
   */
  | {type: 'datetime'; machineReadable?: string}
  /**
   * Indicate emphatic stress. Typically for words that have a stressed emphasis compared to surrounding text.
   *
   * In an HTML host, the text will be rendered in a `<em>` tag.
   */
  | 'stress'
  /**
   * Indicate an offset from the normal prose of the text. Typically used to indicate
   * a foreign word, fictional character thoughts, or when the text refers to the definition of a word
   * instead of representing its semantic meaning.
   *
   * In an HTML host, the text will be rendered in a `<i>` tag.
   */
  | 'offset'
  /**
   * Indicate strong importance, seriousness, or urgency.
   *
   * In an HTML host, the text will be rendered in a `<strong>` tag.
   */
  | 'strong';

/**
 * The status communicates the intent or urgency of a message to the user.
 *
 * - `info`: Neutral informational content with no implied urgency.
 * - `success`: Indicates a successful action or positive state.
 * - `warning`: Indicates something that requires attention but isn’t blocking.
 * - `critical`: Indicates a serious problem or error that needs immediate action.
 */
export type Status =
  /**
   * Use to convey general information or actions that aren’t critical or tied to
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

/**
 * A keyword that maps to a predefined size from the design system's
 * size scale. Components use a subset of these values depending on
 * which sizes they support.
 *
 * - `extraSmall`: The smallest available size.
 * - `small`: A compact size, smaller than the default.
 * - `base`: The default size, appropriate for most contexts.
 * - `large`: A larger size for increased visual prominence.
 * - `extraLarge`: The largest available keyword size.
 * - `fill`: Stretches to fill the available space in the container.
 */
export type Size =
  | 'extraSmall'
  | 'small'
  | 'base'
  | 'large'
  | 'extraLarge'
  | 'fill';

/**
 * A keyword that maps to a predefined spacing value from the design system.
 * Use these instead of pixel values to ensure consistent spacing throughout the UI.
 *
 * - `none`: No spacing (0px).
 * - `extraTight`: The smallest amount of spacing.
 * - `tight`: A compact amount of spacing, suitable for tight layouts.
 * - `base`: The default spacing, appropriate for most layouts.
 * - `loose`: A generous amount of spacing, used to create visual separation.
 * - `extraLoose`: The largest amount of spacing.
 */
export type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';

/**
 * Controls how content is aligned along the cross axis.
 *
 * - `'start'`: Aligns content to the start of the container.
 * - `'center'`: Centers content within the container.
 * - `'end'`: Aligns content to the end of the container.
 */
export type Alignment = 'start' | 'center' | 'end';
/**
 * Controls how content is aligned along the inline axis (horizontal in standard writing modes).
 *
 * - `'start'`: Aligns content to the inline start of the container.
 * - `'center'`: Centers content along the inline axis.
 * - `'end'`: Aligns content to the inline end of the container.
 */
export type InlineAlignment = 'start' | 'center' | 'end';
/**
 * Controls how content is aligned along the block axis (vertical in standard writing modes).
 *
 * - `'start'`: Aligns content to the block start of the container.
 * - `'center'`: Centers content along the block axis.
 * - `'end'`: Aligns content to the block end of the container.
 * - `'baseline'`: Aligns content so their text baselines line up.
 */
export type BlockAlignment = Alignment | 'baseline';

/**
 * A keyword that maps to a predefined background color from the design system.
 *
 * - `transparent`: No background color; the parent's background shows through.
 * - `base`: The standard surface background color.
 * - `subdued`: A muted background color, typically used to de-emphasize content
 *   or distinguish secondary areas from the primary surface.
 */
export type Background = 'transparent' | 'base' | 'subdued';

/**
 * Controls how the background image scales within its container.
 *
 * - `cover`: Scales the image as large as possible to fill the container. The image
 *   may be cropped if its aspect ratio differs from the container.
 * - `contain`: Scales the image to fit within the container without cropping or stretching.
 *
 * Learn more about the [background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) property.
 */
export type BackgroundFit = 'cover' | 'contain';

/**
 * Sets the initial position of the background image within its container.
 *
 * - `top`: Positions the image at the top edge.
 * - `bottom`: Positions the image at the bottom edge.
 * - `left`: Positions the image at the left edge.
 * - `right`: Positions the image at the right edge.
 * - `center`: Centers the image within the container.
 *
 * Learn more about the [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) property.
 */
export type BackgroundPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';

/**
 * Controls how the background image is repeated within its container.
 *
 * - `repeat`: The image is tiled to fill the container.
 * - `noRepeat`: The image is displayed once without repetition.
 *
 * Learn more about the [background-repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat) property.
 */
export type BackgroundRepeat = 'repeat' | 'noRepeat';

/**
 * A keyword that maps to a predefined color or visual treatment from the
 * design system. Used to convey meaning or emphasis through color.
 *
 * - `base`: The default color for the element set within the theme.
 * - `accent`: Conveys emphasis and draws attention to the element.
 * - `decorative`: Uses the `decorative` color set within the theme.
 * - `interactive`: Conveys that the element is pressable or hoverable. Deprecated; use `accent` instead.
 * - `subdued`: Conveys a subdued or disabled state.
 * - `info`: Conveys informational content.
 * - `success`: Conveys a successful interaction.
 * - `warning`: Conveys something needs attention or action.
 * - `critical`: Conveys a problem has arisen.
 * - `monochrome`: Takes the color of its parent, giving a uniform appearance.
 */
export type Appearance =
  /** Takes the default color for the element set within the theme*/
  | 'base'
  /** Conveys emphasis and draws attention to the element.*/
  | 'accent'
  /** Conveys that the element is decorative. It takes the `decorative` color set within the theme.*/
  | 'decorative'
  /**
   * Conveys that the element is pressable, hoverable or otherwise interactive.
   * @deprecated Use `accent` instead.
   */
  | 'interactive'
  /** Conveys a subdued or disabled state for the element.*/
  | 'subdued'
  /** Conveys that the element is informative or has information.*/
  | 'info'
  /** Convey a successful interaction.*/
  | 'success'
  /** Convey something needs attention or an action needs to be taken.*/
  | 'warning'
  /** Conveys a problem has arisen.*/
  | 'critical'
  /** Takes the color of its parent.*/
  | 'monochrome';

export type Direction = 'inline' | 'block';

/**
 * Controls how an image fits within its frame when the image's intrinsic
 * dimensions differ from the frame's dimensions.
 *
 * - `cover`: The image fills the entire frame while maintaining its aspect ratio.
 *   If the image is larger than the frame, it will be cropped.
 * - `contain`: The image fits within the frame while maintaining its aspect ratio.
 *   The frame may have empty space if the aspect ratios differ.
 *
 * Learn more about the [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) property.
 */
export type Fit =
  /**
   * Image maintains its aspect ratio while fitting within the frame.
   */
  | 'cover'
  /**
   * Image maintains its aspect ratio while filling the frame.
   * If the image is larger than the frame, then it will be cropped.
   */
  | 'contain';

export type GridItemSize =
  | 'auto'
  | 'fill'
  | number
  | `${number}fr`
  | `${number}%`;

export type Columns = GridItemSize[] | GridItemSize;
export type Rows = GridItemSize[] | GridItemSize;

/**
 * Use to emphasize a word or a group of words.
 */
export type Emphasis =
  /**
   * Set the text in italic.
   *
   * Combine with an `accessibilityRole` of `offset` or `stress`
   * to add more meaning to the text.
   */
  | 'italic'
  /**
   * Set the text in bold.
   *
   * Combine with an `accessibilityRole` of `strong`
   * to add more meaning to the text.
   */
  | 'bold';

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

export type Visibility = 'hidden';
export type AccessibilityVisibility = 'hidden';
export interface VisibilityProps {
  /**
   * Changes the visibility of the element.
   *
   * `hidden` visually hides the component while keeping it accessible
   * to assistive technology, such as screen readers.
   * Hidden elements don't take any visual space contrary to CSS visibility: hidden;
   */
  visibility?: Visibility;
  /**
   * Changes the visibility of the element to assistive technologies.
   *
   * `hidden` hides the component from assistive technology (for example,
   * a screen reader) but remains visually visible.
   */
  accessibilityVisibility?: AccessibilityVisibility;
}

export interface OverlayActivatorProps {
  /**
   * An overlay component to render when the user interacts with the component.
   */
  overlay?: RemoteFragment;
}

export interface DisclosureActivatorProps {
  /**
   * The component's identifier whose visibility will be toggled when this component is actioned.
   */
  toggles?: string;
}

export type DisclosureOpen = boolean | string | string[];

export type Opacity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type TextSize =
  | Extract<Size, 'extraSmall' | 'small' | 'base' | 'large' | 'extraLarge'>
  | 'medium';

export interface IdProps {
  /**
   * A unique identifier for the component.
   */
  id?: string;
}

export interface InteractionProps {
  /**
   * ID of a component that should respond to activations (e.g. clicks) on this pressable.
   *
   * See `activateAction` for how to control the behavior of the target.
   *
   */
  activateTarget?: string;
  /**
   * Sets the action the `activateTarget` should take when this pressable is activated.
   *
   * Supported actions by component:
   *
   * | Component     | Supported Actions | Default ('auto')  |
   * |---------------|-------------------|-------------------|
   * | [`ClipboardItem`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/clipboarditem) | 'copy'            | 'copy'            |
   *
   * @default 'auto' - a default action for the target component.
   */
  activateAction?: 'auto' | 'copy';
}
