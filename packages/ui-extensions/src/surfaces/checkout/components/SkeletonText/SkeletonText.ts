import {createRemoteComponent} from '@remote-ui/core';

import type {Size} from '../shared';
import type {TextProps} from '../Text/Text';

export interface SkeletonTextProps extends Pick<TextProps, 'size'> {
  /**
   * Use to emphasize a word or a group of words.
   */
  emphasis?: 'bold';
  /**
   * Adjust the length of the text when no children are passed.
   */
  inlineSize?: Extract<Size, 'small' | 'base' | 'large'>;
}

/**
 * SkeletonText is used to provide a low fidelity representation of text content before it appears on the page.
 */
export const SkeletonText = createRemoteComponent<
  'SkeletonText',
  SkeletonTextProps
>('SkeletonText');
