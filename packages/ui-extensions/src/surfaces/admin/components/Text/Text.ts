import {createRemoteComponent} from '@remote-ui/core';

/**
 * Controls how overflowing text content is signaled to the user.
 *
 * - `ellipsis`: Truncates the text and displays an ellipsis (`…`) at the point of truncation.
 */
type TextOverflow = 'ellipsis';

/**
 * Controls the styling of the font's letter forms.
 *
 * - `italic`: Renders text in an italic typeface, typically used for emphasis.
 * - `normal`: Renders text in the upright, default typeface.
 */
type FontStyle = 'italic' | 'normal';

/**
 * The semantic meaning of the text for assistive technologies.
 *
 * - `address`: The text is contact information. Typically used for addresses.
 * - `deletion`: The text has been deleted. Typically used for discounted prices.
 * - `mark`: The text is marked or highlighted and relevant to the current action.
 * - `emphasis`: The text has emphatic stress compared to surrounding text. Renders in an `<em>` tag in HTML.
 * - `offset`: The text is offset from normal prose (such as a foreign word or definition). Renders in an `<i>` tag in HTML.
 * - `strong`: The text indicates strong importance, seriousness, or urgency. Renders in a `<strong>` tag in HTML.
 */
type TextAccessibilityRole =
  | 'address'
  | 'deletion'
  | 'mark'
  | 'emphasis'
  | 'offset'
  | 'strong';

/**
 * Font variant options that control the usage of alternate glyphs.
 *
 * - `numeric`: Enables alternate glyphs for numbers, fractions, and ordinal markers.
 * - `all-small-caps`: Enables alternate glyphs for capital letters using small caps.
 * - `none`: Disables all font-variant ligatures and resets other variants to their initial values.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
 */
type FontVariantOptions = 'numeric' | 'all-small-caps' | 'none';

/**
 * Controls the thickness (weight) of the font.
 *
 * - `light-300`: The lightest available weight.
 * - `light-200`: Lighter than `light-100`.
 * - `light-100`: Slightly below the base weight.
 * - `light`: An alias for `light-100`.
 * - `base`: The default font weight.
 * - `normal`: An alias for `base`.
 * - `bold`: An alias for `bold-100`.
 * - `bold-100`: Slightly above the base weight; used for emphasis.
 * - `bold-200`: Heavier than `bold-100`.
 * - `bold-300`: The heaviest available weight.
 */
type FontWeight =
  | 'light-300'
  | 'light-200'
  | 'light-100'
  | 'light'
  | 'base'
  | 'normal'
  | 'bold'
  | 'bold-100'
  | 'bold-200'
  | 'bold-300';

/**
 * Props for the `Text` component, an inline element for rendering and styling
 * a run of text. Use `Text` to apply typographic treatments such as font
 * weight, style, variant, and overflow behavior to a portion of content.
 */
export interface TextProps {
  /**
   * A unique identifier for the text element. When not set,
   * a globally unique value is used instead.
   */
  id?: string;

  /**
   * The weight (or boldness) of the font. Use heavier weights
   * to create visual emphasis or establish hierarchy in your content.
   */
  fontWeight?: FontWeight;

  /**
   * The behavior for signaling hidden overflow content to users.
   */
  textOverflow?: TextOverflow;

  /**
   * The font variant options that control the usage of alternate glyphs.
   * You can pass a single value or an array of values to combine
   * multiple variants.
   */
  fontVariant?: FontVariantOptions | FontVariantOptions[];

  /**
   * The styling of the font's letter forms.
   */
  fontStyle?: FontStyle;

  /**
   * The semantic meaning of the component’s content. When set, the role
   * will be used by assistive technologies to help users navigate the page.
   */
  accessibilityRole?: TextAccessibilityRole;
}

/** A `Text` component for rendering and styling inline text content. */
export const Text = createRemoteComponent<'Text', TextProps>('Text');
