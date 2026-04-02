import {createRemoteComponent} from '@remote-ui/core';

import type {
  MaybeConditionalStyle,
  ResolutionCondition,
} from '../../style/types';
import type {Size} from '../shared';

/** @publicDocs */
export interface ProductThumbnailProps {
  /**
   * The alternative text that describes the product thumbnail for assistive
   * technologies. Screen readers announce this text when they encounter
   * the image, and it displays as a fallback if the image fails to load.
   *
   * This property is an alias for `accessibilityLabel` for compatibility
   * with the HTML specification. When both are specified,
   * `accessibilityLabel` takes precedence.
   *
   * Learn more about [writing effective alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt
   */
  alt?: string;

  /**
   * The alternative text that describes the product thumbnail for assistive
   * technologies. Screen readers announce this text when they encounter
   * the image, and it displays as a fallback if the image fails to load.
   *
   * An `alt` property is available as an alias for compatibility with the
   * HTML specification. When both are specified, `accessibilityLabel`
   * takes precedence.
   *
   * Learn more about [writing effective alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204).
   *
   * @defaultValue `''`
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt
   */
  accessibilityLabel?: string;

  /**
   * The image source (either a remote URL or a local file resource).
   *
   * A `src` property is available as an alias for this for compatibility with the HTML
   * specification. When both are specified, `source` takes precedence.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
   */
  source?: MaybeConditionalStyle<string, ResolutionCondition>;

  /**
   * The image source (either a remote URL or a local file resource).
   *
   * This property is available as an alias for `source` for compatibility with the HTML
   * specification. When both are specified, `source` takes precedence.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
   */
  src?: MaybeConditionalStyle<string, ResolutionCondition>;

  /**
   * A number displayed as a badge on the product thumbnail, typically
   * used to indicate the quantity of the product in a cart or order.
   */
  badge?: number;

  /**
   * The size of the product thumbnail image.
   *
   * - `small`: A compact thumbnail for tighter layouts.
   * - `base`: Renders the thumbnail at its standard size.
   *
   * @defaultValue 'base'
   */
  size?: Extract<Size, 'base' | 'small'>;
}

export const ProductThumbnail = createRemoteComponent<
  'ProductThumbnail',
  ProductThumbnailProps
>('ProductThumbnail');
