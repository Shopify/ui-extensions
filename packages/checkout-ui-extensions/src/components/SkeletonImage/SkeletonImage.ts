import {createRemoteComponent} from '@remote-ui/core';

import {MaybeConditionalStyle} from '../../style';

export interface SkeletonImageProps {
  /**
   * Adjust the block size of the skeleton.
   */
  // eslint-disable-next-line prettier/prettier
  blockSize?: MaybeConditionalStyle<number | `${number}%` | 'fill'>;
  /**
   * Adjust the inline size of the skeleton.
   */
  inlineSize?: MaybeConditionalStyle<number | `${number}%` | 'fill'>;
  /**
   * Displays the skeleton at the specified aspect ratio (fills the width of the
   * parent container and sets the height accordingly).
   */
  aspectRatio?: number;
}
/**
 * SkeletonImage is used to provide a low fidelity representation of an image before it appears on the page.
 */
export const SkeletonImage = createRemoteComponent<
  'SkeletonImage',
  SkeletonImageProps
>('SkeletonImage');
