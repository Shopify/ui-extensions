import {createRemoteComponent} from '@remote-ui/core';

import {TextBlockProps} from '../TextBlock';

export interface SkeletonTextBlockProps
  extends Omit<TextBlockProps, 'id' | 'appearance'> {
  /**
   * Number of lines to display when no children are passed.
   *
   * @defaultValue 1
   */
  lines?: number;
}

/**
 * SkeletonTextBlock is used to provide a low fidelity representation of a block of text before it appears on the page.
 */
export const SkeletonTextBlock = createRemoteComponent<
  'SkeletonTextBlock',
  SkeletonTextBlockProps
>('SkeletonTextBlock');
