import {createRemoteComponent} from '@remote-ui/core';

import type {
  MaybeConditionalStyle,
  MaybeResponsiveConditionalStyle,
  ResolutionCondition,
  ViewportSizeCondition,
  AtLeastOne,
} from '../../style/types';
import type {
  AccessibilityRole,
  BorderProps,
  CornerProps,
  Fit,
  IdProps,
} from '../shared';

export interface ImageProps extends BorderProps, CornerProps, IdProps {
  /**
   * The URL of the image to display. Supports remote URLs and local file
   * resources. You can also use conditional styles with `resolution` and
   * `viewportInlineSize` conditions to serve different images based on
   * the device's pixel density or viewport width.
   */
  source: Required<
    MaybeConditionalStyle<
      string,
      AtLeastOne<ViewportSizeCondition & ResolutionCondition>
    >
  >;
  /**
   * The alternative text that describes the image for assistive technologies.
   * Screen readers announce this text when they encounter the image, and
   * it displays as a fallback if the image fails to load.
   *
   * Learn more about [writing effective alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204).
   *
   * @defaultValue ''
   */
  accessibilityDescription?: string;
  /**
   * The loading strategy for the image. Uses native browser behavior
   * and is not supported by all browsers. If no value is provided, the
   * image is loaded immediately.
   */
  loading?: Loading;
  /**
   * The aspect ratio to display the image at (fills the width of the
   * parent container and sets the height accordingly). An invisible
   * placeholder is created to prevent content jumping when the image
   * loads. Use along with `fit` if the specified aspect ratio does not
   * match the intrinsic aspect ratio to prevent the image from stretching.
   */
  aspectRatio?: number;
  /**
   * The fit of the image within its frame. Use when the image is not
   * displayed at its intrinsic size to maintain the aspect ratio.
   */
  fit?: MaybeResponsiveConditionalStyle<Fit>;
  /**
   * The semantic role of the image for assistive technologies.
   *
   * - `decorative`: Marks the image as purely visual, so screen readers
   *   skip it entirely. Use this for images that don’t convey meaningful
   *   content (like background patterns or visual flourishes).
   */
  accessibilityRole?: Extract<AccessibilityRole, 'decorative'>;
}

/**
 * Controls when the browser begins loading the image.
 *
 * - `eager`: Loads the image immediately, regardless of whether it’s
 *   visible in the viewport.
 * - `lazy`: Defers loading until the image approaches the visible viewport,
 *   which can improve initial page performance.
 */
type Loading =
  /**
   * Image is loaded immediately, regardless of whether or not the image is currently within the visible viewport.
   */
  | 'eager'
  /**
   * Image is loaded when it’s within the visible viewport.
   */
  | 'lazy';

/**
 * Image is used for large format, responsive images.
 */
export const Image = createRemoteComponent<'Image', ImageProps>('Image');
