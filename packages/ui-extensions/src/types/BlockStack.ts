import type {BlockAlignment, InlineAlignment, Spacing} from './shared';

export interface BaseBlockStackProps {
  /**
   * Specifies the block alignment
   * @defaultValue `leading`
   */
  blockAlignment?: BlockAlignment;
  /**
   * Specifies the inline alignment
   * @defaultValue `leading`
   */
  inlineAlignment?: InlineAlignment;
  /**
   * Adjust spacing between children
   * @defaultValue 'base'
   **/
  spacing?: Spacing;
}
