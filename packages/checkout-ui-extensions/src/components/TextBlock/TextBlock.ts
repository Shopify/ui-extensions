import {createRemoteComponent} from '@remote-ui/core';

import {InlineAlignment, Emphasis, Size, Appearance} from '../shared';

export interface TextBlockProps {
  /**
   * Size of the text
   */
  size?:
    | Extract<Size, 'extraSmall' | 'small' | 'base' | 'large' | 'extraLarge'>
    | 'medium';
  /**
   * Use to emphasize a word or a group of words compared to other nearby text.
   */
  emphasis?: Emphasis;
  /**
   * Unique identifier
   */
  id?: string;
  /**
   * Changes the visual appearance
   */
  appearance?: Extract<
    Appearance,
    'accent' | 'subdued' | 'info' | 'success' | 'warning' | 'critical'
  >;
  /**
   * Align text along the main axis.
   */
  inlineAlignment?: InlineAlignment;
}

/**
 * Text block is used to render a block of text that occupies the full width available, like a paragraph.
 */
export const TextBlock = createRemoteComponent<'TextBlock', TextBlockProps>(
  'TextBlock',
);
