import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {IdProps} from '../shared';

/**
 * SkeletonImage is used to provide a low fidelity representation of an image before it appears on the page.
 * @publicDocs
 */
export interface SkeletonImageProps extends IdProps {
  /**
   * The block size (height in horizontal writing modes) of the skeleton placeholder.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's block size.
   * - `fill`: Takes all the available space.
   *
   * Learn more about the [block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size) property.
   */
  blockSize?: MaybeResponsiveConditionalStyle<number | `${number}%` | 'fill'>;
  /**
   * The inline size (width in horizontal writing modes) of the skeleton placeholder.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's inline size.
   * - `fill`: Takes all the available space.
   *
   * Learn more about the [inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size) property.
   */
  inlineSize?: MaybeResponsiveConditionalStyle<number | `${number}%` | 'fill'>;
  /**
   * The aspect ratio to display the skeleton at (fills the width of the
   * parent container and sets the height accordingly). Use this to reserve
   * the correct space for an image before it loads, preventing content
   * jumping.
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
