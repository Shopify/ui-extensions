import {createRemoteComponent} from '@remote-ui/core';

import {TextProps} from '../Text';

export interface SkeletonTextProps
  extends Omit<TextProps, 'id' | 'role' | 'appearance'> {
  /**
   * Adjust the inline size when no children are passed.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  inlineSize?: number;
}

/**
 * SkeletonText is used to provide a low fidelity representation of text content before it appears on the page.
 */
export const SkeletonText = createRemoteComponent<
  'SkeletonText',
  SkeletonTextProps
>('SkeletonText');
