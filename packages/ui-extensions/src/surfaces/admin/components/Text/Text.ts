import {createRemoteComponent} from '@remote-ui/core';

type TextOverflow = 'ellipsis';

type FontStyle = 'italic' | 'normal';

type TextAccessibilityRole =
  /**
   * Indicate the text is contact information. Typically used for addresses.
   */
  | 'address'

  /**
   * Indicate the text has been deleted. Typically used for discounted prices.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
   */
  | 'deletion'

  /**
   * Indicate the text is marked or highlighted and relevant to the buyer’s current action.
   * Typically used to indicate the characters that matched a search query.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role
   */
  | 'mark'

  /**
   * Indicate emphatic stress. Typically for words that have a stressed emphasis compared to surrounding text.
   *
   * In an HTML host, the text will be rendered in a `<em>` tag.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
   */
  | 'emphasis'

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
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
   */
  | 'strong';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
 */
type FontVariantOptions =
  /**
   * The `font-variant-numeric` CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
   */
  | 'numeric'
  /**
   * The `font-variant-caps` CSS property controls the use of alternate glyphs for capital letters.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps
   */
  | 'all-small-caps'
  /**
   * Sets the value of the `font-variant-ligatures` as `none`,
   * and the values of the other longhand properties as `normal`, their initial value.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant#values
   */
  | 'none';

type FontWeight =
  | 'light-400'
  | 'light-300'
  | 'light-200'
  | 'light-100'
  // alias to light-100
  | 'light'
  | 'base'
  // alias to base
  | 'normal'
  // alias to bold-100
  | 'bold'
  | 'bold-100'
  | 'bold-200'
  | 'bold-300'
  | 'bold-400';

export interface TextProps {
  /** A unique identifier for the field. */
  id?: string;

  /**
   * Sets the weight (or boldness) of the font.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
   * */
  fontWeight?: FontWeight;

  /**
   * Set how hidden overflow content is signaled to users.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
   * */
  textOverflow?: TextOverflow;

  /**
   * Set all the variants for a font with a shorthand property.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
   */
  fontVariant?: FontVariantOptions | FontVariantOptions[];

  /**
   *  Use to emphasize a word or a group of words.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
   */
  fontStyle?: FontStyle;

  /**
   * Provide semantic meaning to content and improve support for assistive technologies.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
   */
  accessibilityRole?: TextAccessibilityRole;
}

export const Text = createRemoteComponent<'Text', TextProps>('Text');
