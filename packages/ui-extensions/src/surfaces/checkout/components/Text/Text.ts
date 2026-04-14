import {createRemoteComponent} from '@remote-ui/core';

import type {
  TextAccessibilityRole,
  Emphasis,
  TextSize,
  Appearance,
  VisibilityProps,
} from '../shared';

/**
 * Configure the following properties on the text component.
 * @publicDocs
 */
export interface TextProps extends VisibilityProps {
  /**
   * A keyword that sets the size of the text. Sizes map to the design system's type scale.
   *
   * - `extraSmall`: The smallest text size.
   * - `small`: A smaller text size for secondary content.
   * - `base`: The default text size for body content.
   * - `medium`: A slightly larger text size.
   * - `large`: A larger text size for emphasis.
   * - `extraLarge`: The largest text size.
   */
  size?: TextSize;
  /**
   * Use to emphasize a word or a group of words. Set to `bold` or `italic` to apply typographic emphasis that communicates visual hierarchy or stress.
   *
   * - `italic`: Sets the text in italic. Combine with an `accessibilityRole` of `offset` or `stress` to add more meaning to the text.
   * - `bold`: Sets the text in bold. Combine with an `accessibilityRole` of `strong` to add more meaning to the text.
   */
  emphasis?: Emphasis;
  /**
   * Sets the semantic meaning of the text content for assistive technologies. When set, the role conveys additional context about the text's purpose.
   *
   * - `address`: Indicates the text is contact information. Typically used for addresses.
   * - `deletion`: Indicates the text has been deleted. Typically used for discounted prices.
   * - `marking`: Indicates the text is marked or highlighted and relevant to the user's current action.
   * - `stress`: Indicates emphatic stress. Typically for words that have a stressed emphasis compared to surrounding text.
   * - `offset`: Indicates an offset from the normal prose of the text. Typically used for a foreign word or fictional character thoughts.
   * - `strong`: Indicates strong importance, seriousness, or urgency.
   */
  accessibilityRole?: TextAccessibilityRole;
  /**
   * A unique identifier for the component.
   * Typically used as a target for another component's controls
   * to associate an accessible label with an action.
   */
  id?: string;
  /**
   * Changes the visual appearance of the text, letting you convey meaning through color.
   *
   * - `accent`: Conveys emphasis and draws attention to the element.
   * - `subdued`: Conveys a subdued or disabled state.
   * - `info`: Conveys informational content.
   * - `success`: Conveys a successful interaction.
   * - `warning`: Conveys something needs attention or action.
   * - `critical`: Conveys a problem has arisen.
   * - `decorative`: Uses the `decorative` color set within the theme.
   */
  appearance?: Extract<
    Appearance,
    | 'accent'
    | 'subdued'
    | 'info'
    | 'success'
    | 'warning'
    | 'critical'
    | 'decorative'
  >;
}

/**
 * Text is used to visually style and provide semantic value for a small piece of text
 * content.
 */
export const Text = createRemoteComponent<'Text', TextProps>('Text');
