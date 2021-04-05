import {createRemoteComponent} from '@remote-ui/core';

export interface LayoutProps {
  /**
   * Specifies the inline alignment of the layout in its container.
   * By default, it will be centered.
   */
  inlineAlignment?: 'leading' | 'trailing';
  /**
   * Specifies the block alignment of the layout in its container.
   * By default, it will be leading.
   */
  blockAlignment?: 'center' | 'trailing';
  /**
   * Default maximum inline size of the layout within its viewport.
   * The size specified will constrain the space available for its sections and will
   * be centered in the viewport unless specified otherwise with `inlineAlignment`.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  maxInlineSize?: number;
  /**
   * Default sizes for each section of the layout
   */
  sizes?: Size[];
  /**
   * Sizes at different media
   */
  media?: Media[];
}

/**
 * Options available for section sizes.
 *
 * `auto` will fit to the size of its content.
 * `fill` will take the remaining space available.
 * `Number` less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
 *
 * Examples:
 * - `500` represents `500px`
 * - `0.5` represents `50%`
 * - `1` represents `100%`
 */
type Size = 'auto' | 'fill' | number;

type ViewportSize = 'small' | 'medium' | 'large';

interface Media {
  /*
   * Specifies the viewport size these instruction will apply to.
   */
  viewportSize: ViewportSize;
  /**
   * Maximum inline size of the layout for this viewport.
   * The size specified will constrain the space available for its sections and will
   * be centered in the viewport unless specified otherwise with `inlineAlignment`.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  maxInlineSize?: number;
  /**
   * Sizes for each section of the layout for this media.
   * If a `maxInlineSize` is specified, make sure you adapt your pixel values accordingly.
   */
  sizes?: Size[];
}

/**
 * Layout is used to create macro layouts that responds to different media sizes.
 */
export const Layout = createRemoteComponent<'Layout', LayoutProps>('Layout');
