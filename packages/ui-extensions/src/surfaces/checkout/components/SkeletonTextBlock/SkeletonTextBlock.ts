import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps, TextSize} from '../shared';

/** @publicDocs */
export interface SkeletonTextBlockProps extends IdProps {
  /**
   * @private
   * Use to emphasize a word or a group of words.
   */
  emphasis?: 'bold';
  /**
   * The number of text lines the skeleton renders when no children are provided. Use this to match the expected paragraph length of the content being loaded.
   *
   * @defaultValue 1
   */
  lines?: number;
  /**
   * A keyword that sets the size of the skeleton to match the text it replaces. The size maps to the design system's type scale, ensuring the placeholder accurately represents the final content dimensions.
   */
  size?: TextSize;
}

/**
 * SkeletonTextBlock is used to provide a low fidelity representation of a block of text before it appears on the page.
 */
export const SkeletonTextBlock = createRemoteComponent<
  'SkeletonTextBlock',
  SkeletonTextBlockProps
>('SkeletonTextBlock');
