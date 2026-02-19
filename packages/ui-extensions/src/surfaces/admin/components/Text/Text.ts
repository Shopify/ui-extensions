import {createRemoteComponent} from '@remote-ui/core';
import type {
  FontWeight,
  TextOverflow,
  FontVariantOptions,
  FontStyle,
  TextAccessibilityRole,
} from '../shared';

/**
 * Props for the Text component, an inline element for rendering and styling
 * a run of text. Use Text to apply typographic treatments such as font
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
   * The semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help users navigate the page.
   */
  accessibilityRole?: TextAccessibilityRole;
}

/** A Text component for rendering and styling inline text content. */
export const Text = createRemoteComponent<'Text', TextProps>('Text');
