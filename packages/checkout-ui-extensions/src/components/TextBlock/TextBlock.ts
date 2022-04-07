import {createRemoteComponent} from '@remote-ui/core';

type Size = 'extraSmall' | 'small' | 'base' | 'medium' | 'large' | 'extraLarge';

export interface TextBlockProps {
  /** Size of the text */
  size?: Size;
  /**
   * Use to emphasize a word or a group of words compared to other nearby text.
   *
   * `strong`:
   * Indicate strong importance, seriousness, or urgency.
   * By default the text will be bold.
   *
   * `stress`:
   * Indicate emphatic stress. By default the text will be italic.
   *
   * `offset`:
   * Indicate an offset from the normal prose of the text. Typically used to indicate
   * a foreign word, fictional character thoughts, or when the text refers to the definition of a word
   * instead of representing its semantic meaning.
   * By default the text will be italic.
   */
  emphasis?: 'stress' | 'offset' | 'strong';
  /** Unique identifier */
  id?: string;
  /** Changes the visual appearance */
  appearance?:
    | 'critical'
    | 'warning'
    | 'success'
    | 'accent'
    | 'subdued'
    | 'information';
}

/**
 * Text block is used to render a block of text that occupies the full width available, like a paragraph.
 */
export const TextBlock = createRemoteComponent<'TextBlock', TextBlockProps>(
  'TextBlock',
);
