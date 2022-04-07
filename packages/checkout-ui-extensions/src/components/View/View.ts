import {createRemoteComponent} from '@remote-ui/core';

import {Responsive, CSSShorthand, Bordered} from '../shared';

type Background =
  | 'surfacePrimary'
  | 'surfaceSecondary'
  | 'surfaceTertiary'
  | 'transparent'
  | 'color1'
  | 'color2';
type BackgroundPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
type BackgroundFit = 'cover' | 'contain';
type Spacing =
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose'
  | 'none';
type Visibility = 'hidden';
type AccessibilityVisibility = 'hidden';
type Display = 'block' | 'inline';

export interface ViewProps extends Bordered {
  /**
   * Adjust the maximum inline size.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  maxInlineSize?: number | Responsive<number>;

  /**
   * Adjust the minimum inline size.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  minInlineSize?: number | Responsive<number>;

  /**
   * Adjust the padding.
   *
   * To shorten the code, it is possible to specify all the padding properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart paddings are `base`
   * - [`base`, `none`] means blockStart and blockEnd paddings are `base`, inlineStart and inlineEnd paddings are `none`
   * - [`base`, `none`, `loose`, `tight`] means blockStart padding is `base`, inlineEnd padding is `none`, blockEnd padding is `loose` and  blockStart padding is `tight`
   */
  padding?: CSSShorthand<Spacing> | Responsive<CSSShorthand<Spacing>>;

  /**
   * Adjust the background.
   */
  background?: Background | Responsive<Background>;

  /**
   * Sets one or multiple responsive background images.
   */
  backgroundImage?: string | Responsive<string>;

  /**
   * Indicates if the background image should scale its container without cropping
   * and stretching, or scale as large as possible to fill the container and stretching if necessary.
   */
  backgroundFit?: BackgroundFit;

  /**
   * Sets the initial position of the background image.
   * @defaultValue 'center'
   */
  backgroundPosition?: BackgroundPosition;

  /**
   * Sets how background image are repeated.
   * @defaultValue false
   */
  backgroundRepeat?: boolean;

  /**
   * Changes the visibility of the element.
   *
   * 'hidden' visually hides the component while keeping it accessible to assistive technology (for example,
   * a screen reader). Hidden elements do not take any visual space contrary to CSS visibility: hidden;
   */
  visibility?: Visibility;

  /**
   * Changes the visibility of the element to assistive technologies.
   *
   * 'hidden' hides the component from assistive technology (for example,
   * a screen reader) but remains visually visible.
   */
  accessibilityVisibility?: AccessibilityVisibility;

  /**
   * Changes the display of the View.
   *
   * 'inline' follows the direction of words in a sentence based on the document’s writing mode.
   * 'block' follows the direction of paragraphs based on the document’s writing mode.
   *
   * @defaultValue 'block'
   */
  display?: Display;

  /**
   * A unique identifier for the View.
   */
  id?: string;

  /**
   * Adjust the block size.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  blockSize?: number | Responsive<number>;
}

/**
 *  View is a generic container component. Its contents will always be their
 * “natural” size, so this component can be useful in layout components (like `Layout`, `Tiles`,
 * `BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.
 *
 * Note: View’s box model related properties like `padding`, `border`, `borderRadius`, and `borderColor` are implemented as
 * [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts).
 */
export const View = createRemoteComponent<'View', ViewProps>('View');
