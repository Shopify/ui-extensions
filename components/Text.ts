/**
 * Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text.
 * @property text Text value to display
 * @property size Size of the text. Defaults to Medium
 * @property style The style of the font
 * @property color The color of the text. Defaults to Primary
 * @property alignment Text alignment. Defaults to left aligned
 */
export interface Text {
  children: React.ReactNode;
  size?: TextSize;
  style?: Style;
  color?: Color;
  alignment?: Alignment;
}

export type TextSize =
  | 'small'
  | 'medium'
  | 'titleSmall'
  | 'titleMedium'
  | 'titleLarge'
  | 'titleExtraLarge';

export type Alignment = 'left' | 'right' | 'center' | 'justify';

export type Style = 'normal' | 'italic' | 'monospace' | 'strong';

export type Color = 'primary' | 'secondary' | 'warning' | 'error' | 'success';
