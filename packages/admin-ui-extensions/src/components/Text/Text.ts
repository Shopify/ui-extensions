import {createRemoteComponent} from '@remote-ui/core';

type TextSize =
  | 'small'
  | 'medium'
  | 'titleSmall'
  | 'titleMedium'
  | 'titleLarge'
  | 'titleExtraLarge';

type Alignment = 'left' | 'right' | 'center' | 'justify';

type Style = 'normal' | 'italic' | 'monospace' | 'strong';

type Color = 'primary' | 'secondary' | 'warning' | 'error' | 'success';

export interface TextProps {
  /**
   * @defaultValue 'medium'
   */
  size?: TextSize;

  /** Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text. */
  style?: Style;

  /**
   * @defaultValue 'primary'
   */
  color?: Color;

  /**
   * Vertical alignment of the text.
   * @defaultValue 'left'
   */
  alignment?: Alignment;
}

/**
 * The Text component is used to render text in different sizes, colors, and alignments.
 */
export const Text = createRemoteComponent<'Text', TextProps>('Text');
