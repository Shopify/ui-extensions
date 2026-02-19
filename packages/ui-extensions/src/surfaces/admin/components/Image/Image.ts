import {createRemoteComponent} from '@remote-ui/core';
import type {AccessibilityRole} from '../shared';

/**
 * Props for the Image component. Requires either `accessibilityLabel`
 * or `alt` for alternative text, and either `source` or `src` for the
 * image URL.
 */
export type ImageProps = (ImageAccessibilityLabelProp | ImageAltProp) &
  (ImageSourceProp | ImageSrcProp) &
  ImageBaseProps;

/**
 * Base props shared by all Image variants.
 */
interface ImageBaseProps {
  /**
   * The semantic role of the image for assistive technologies.
   *
   * - `decorative`: Marks the image as purely visual, so screen readers
   *   skip it entirely. Use this for images that don't convey meaningful
   *   content (like background patterns or visual flourishes).
   */
  accessibilityRole?: Extract<AccessibilityRole, 'decorative'>;

  /**
   * A unique identifier for the image. Must be unique within the entire
   * extension.
   */
  id?: string;

  /**
   * Controls when the image starts loading.
   *
   * - `eager`: Loads the image immediately, regardless of whether it's
   *   visible in the viewport.
   * - `lazy`: Defers loading until the image approaches the viewport,
   *   which can improve initial page performance.
   *
   * @defaultValue 'eager'
   */
  loading?: 'eager' | 'lazy';

  /**
   * A callback that fires when the image finishes loading successfully.
   * Use this to trigger UI updates that depend on the image being ready
   * (for example, removing a loading skeleton).
   */
  onLoad?(): void;

  /**
   * A callback that fires when the image fails to load (for example, due
   * to a broken URL or network error). Use this to show a fallback or
   * error state.
   */
  onError?(): void;
}

/**
 * Variant that uses `accessibilityLabel` for alternative text.
 */
interface ImageAccessibilityLabelProp {
  /**
   * Alternative text that describes the image for assistive technologies.
   * Screen readers announce this text when they encounter the image, and
   * it displays as a fallback if the image fails to load. An `alt` prop
   * is available as an alias.
   *
   * Learn more about [writing effective alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204).
   */
  accessibilityLabel: string;
  /**
   * The alternative text for the image. Typed as `never` on this variant
   * because `accessibilityLabel` is already set. To use `alt` instead,
   * omit `accessibilityLabel`.
   */
  alt?: never;
}

/**
 * Variant that uses `alt` for alternative text.
 */
interface ImageAltProp {
  /**
   * An alias for `accessibilityLabel`.
   * Alternative text that describes the image for assistive technologies.
   * Screen readers announce this text when they encounter the image, and
   * it displays as a fallback if the image fails to load.
   *
   * Learn more about [writing effective alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204).
   */
  alt: string;
  /**
   * The alternative text for the image. Typed as `never` on this variant
   * because `alt` is already set. To use `accessibilityLabel` instead,
   * omit `alt`.
   */
  accessibilityLabel?: never;
}

/**
 * Variant that uses `src` for the image URL.
 */
interface ImageSrcProp {
  /**
   * An alias for `source`.
   * The URL of the image to display. Supports remote URLs and local
   * file resources. Blob URLs aren't currently supported.
   */
  src: string;
  /**
   * The URL of the image to display. Typed as `never` on this variant
   * because `src` is already set. To use `source` instead, omit `src`.
   */
  source?: never;
}

/**
 * Variant that uses `source` for the image URL.
 */
interface ImageSourceProp {
  /**
   * The URL of the image to display. Supports remote URLs and local
   * file resources. Blob URLs aren't currently supported. A `src` prop
   * is available as an alias.
   */
  source: string;
  /**
   * The URL of the image to display. Typed as `never` on this variant
   * because `source` is already set. To use `src` instead, omit `source`.
   */
  src?: never;
}

/**
 * Displays an image with configurable loading strategy, accessibility
 * text, and load / error callbacks.
 */
export const Image = createRemoteComponent<'Image', ImageProps>('Image');
