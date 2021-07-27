import type {BlockAlignment, InlineAlignment, Spacing} from './shared';

export interface BaseInlineStackProps {
  /**
   * Specifies the block alignment. This affects the vertical flow of elements.
   * @defaultValue `leading`
   */
  blockAlignment?: BlockAlignment;
  /**
   * Specifies the inline alignment. This affects the horizontal flow of elements.
   * @defaultValue `leading`
   */
  inlineAlignment?: InlineAlignment;
  /**
   * Adjust spacing between children.
   * @defaultValue 'base'
   **/
  spacing?: Spacing;
}
