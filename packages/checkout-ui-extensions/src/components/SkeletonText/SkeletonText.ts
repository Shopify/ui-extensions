import {createRemoteComponent} from '@remote-ui/core';

import {TextProps} from '../Text';

export interface SkeletonTextProps
  extends Omit<TextProps, 'id' | 'role' | 'appearance'> {
  /**
   * Adjust the length of the text when no children are passed.
   *
   */
  inlineSize?: 'small' | 'medium' | 'large';
}

/**
 * SkeletonText is used to provide a low fidelity representation of text content before it appears on the page.
 */
export const SkeletonText = createRemoteComponent<
  'SkeletonText',
  SkeletonTextProps
>('SkeletonText');
