import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps, TextSize, Size} from '../shared';

/**
 * Configure the following properties on the skeleton text component.
 * @publicDocs
 */
export interface SkeletonTextProps extends IdProps {
  /**
   * @private
   * Use to emphasize a word or a group of words.
   */
  emphasis?: 'bold';
  /**
   * Adjusts the visual length of the skeleton placeholder when no children are provided. Use this to approximate the expected width of the content that will eventually load.
   */
  inlineSize?: Extract<Size, 'small' | 'base' | 'large'>;
  /**
   * A keyword that sets the size of the skeleton to match the text it replaces. The size maps to the design system's type scale, ensuring the placeholder accurately represents the final content dimensions.
   */
  size?: TextSize;
}

/**
 * SkeletonText is used to provide a low fidelity representation of text content before it appears on the page.
 */
export const SkeletonText = createRemoteComponent<
  'SkeletonText',
  SkeletonTextProps
>('SkeletonText');
