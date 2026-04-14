import {createRemoteComponent} from '@remote-ui/core';

import type {
  Appearance,
  Emphasis,
  IdProps,
  InlineAlignment,
  TextSize,
} from '../shared';

/**
 * Configure the following properties on the text block component.
 * @publicDocs
 */
export interface TextBlockProps extends IdProps {
  /**
   * A keyword that sets the size of the text block. Sizes map to the design system's type scale.
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
   * Use to emphasize a word or a group of words within the text block. Set to `bold` or `italic` to apply typographic emphasis that communicates visual hierarchy or stress.
   *
   * - `italic`: Sets the text block in italic. Combine with an `accessibilityRole` of `offset` or `stress` to add more meaning to the text.
   * - `bold`: Sets the text block in bold. Combine with an `accessibilityRole` of `strong` to add more meaning to the text.
   */
  emphasis?: Emphasis;
  /**
   * Changes the visual appearance of the text block, letting you convey meaning through color.
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
  /**
   * Aligns the text along the inline axis. Use this to control the horizontal text alignment within the text block.
   */
  inlineAlignment?: InlineAlignment;
}

/**
 * Text block is used to render a block of text that occupies the full width available, like a paragraph.
 */
export const TextBlock = createRemoteComponent<'TextBlock', TextBlockProps>(
  'TextBlock',
);
