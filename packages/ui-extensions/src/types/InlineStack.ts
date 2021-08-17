import type {BlockAlignment, InlineAlignment, Spacing} from './shared';

export interface BaseInlineStackProps {
  /**
   * Specifies the block alignment. This affects the vertical flow of elements.
   * @defaultValue `leading`
   */
  blockAlignment?: InlineAlignment;
  /**
   * Specifies the inline alignment. This affects the horizontal flow of elements.
   * @defaultValue `leading`
   */
  inlineAlignment?: BlockAlignment;
  /**
   * Adjust spacing between children.
   * @defaultValue 'base'
   **/
  spacing?: Spacing;
}
