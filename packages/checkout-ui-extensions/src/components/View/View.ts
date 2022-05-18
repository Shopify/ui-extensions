import {createRemoteComponent} from '@remote-ui/core';

import {
  Responsive,
  CSSShorthand,
  Bordered,
  MultiPick,
  Unit,
  AccessibilityRole,
} from '../shared';

type Background = 'transparent' | 'color1' | 'color2' | 'color3';
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
type BlockAlignment = 'center' | 'leading' | 'trailing';
type InlineAlignment = 'center' | 'leading' | 'trailing';
type Opacity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type PositionType = 'absolute' | 'relative';
export type Coordinate = number;
interface BaseCoordinates {
  /**
   * Adjust the block start offset.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   * A percentage value refers to the block size of the parent component.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  blockStart: Coordinate;
  /**
   * Adjust the inline start offset.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   * A percentage value refers to the inline size of the parent component.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  inlineStart: Coordinate;
  /**
   * Adjust the block end offset.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   * A percentage value refers to the block size of the parent component.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  blockEnd: Coordinate;
  /**
   * Adjust the inline end offset.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   * A percentage value refers to the inline size of the parent component.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  inlineEnd: Coordinate;
}

type PositionCoordinates = MultiPick<
  BaseCoordinates,
  [
    'blockStart' | 'inlineStart',
    'blockStart' | 'inlineEnd',
    'blockEnd' | 'inlineStart',
    'blockEnd' | 'inlineEnd',
    'blockStart',
    'blockEnd',
    'inlineStart',
    'inlineEnd',
  ]
>;

export type Position = {
  /**
   * Changes how the View is positioned. For setting the position, only properties
   * that set the offset on a different axis can be set simultaneously. This means
   * that these combinations are not allowed:
   *
   * ```
   * { blockStart, blockEnd }
   * ```
   *
   * ```
   * { inlineStart, inlineEnd }
   * ```
   *
   * @defaultValue 'relative'
   */
  type?: PositionType;
} & PositionCoordinates;

export interface Translate {
  /**
   * Adjust the translation on the cross axis.
   *
   * A percentage value refers to the block size of the View.
   */
  block?: Unit<'px' | '%'>;
  /**
   * Adjust the translation on the main axis.
   *
   * A percentage value refers to the inline size of the View.
   */
  inline?: Unit<'px' | '%'>;
}

export interface ViewProps extends Bordered {
  /**
   * Adjust the maximum inline size.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   *
   *
   * Examples:
   *
   * - `500` represents `500px`
   *
   * - `0.5` represents `50%`
   *
   * - `1` represents `100%`
   */
  maxInlineSize?: number | Responsive<number>;

  /**
   * Adjust the minimum inline size.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   *
   *
   * Examples:
   *
   * - `500` represents `500px`
   *
   * - `0.5` represents `50%`
   *
   * - `1` represents `100%`
   */
  minInlineSize?: number | Responsive<number>;

  /**
   * Adjust the padding.
   *
   * To shorten the code, it is possible to specify all the padding properties in one property.
   *
   *
   * Examples:
   *
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart paddings are `base`
   *
   * - [`base`, `none`] means blockStart and blockEnd paddings are `base`, inlineStart and inlineEnd paddings are `none`
   *
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
   *
   * @defaultValue 'center'
   */
  backgroundPosition?: BackgroundPosition;

  /**
   * Sets how background image are repeated.
   *
   * @defaultValue false
   */
  backgroundRepeat?: boolean;

  /**
   * Changes the visibility of the element.
   *
   * `hidden` visually hides the component while keeping it accessible to assistive technology (for example,
   * a screen reader). Hidden elements do not take any visual space contrary to CSS visibility: hidden;
   */
  visibility?: Visibility;

  /**
   * Changes the visibility of the element to assistive technologies.
   *
   * `hidden` hides the component from assistive technology (for example,
   * a screen reader) but remains visually visible.
   */
  accessibilityVisibility?: AccessibilityVisibility;

  /**
   * Changes the display of the View.
   *
   *
   * `inline` follows the direction of words in a sentence based on the document’s writing mode.
   *
   * `block` follows the direction of paragraphs based on the document’s writing mode.
   *
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
   *
   * Examples:
   * - `500` represents `500px`
   *
   * - `0.5` represents `50%`
   *
   * - `1` represents `100%`
   */
  blockSize?: number | Responsive<number>;

  /**
   * Sets the opacity of the View. The opacity will be applied to the background as well as all
   * the childrens of the View. Use carefully as this could decrease the contrast ratio between
   * the background and foreground elements resulting in unreadable and inaccessible text.
   */
  opacity?: Opacity;
  /**
   * A label that describes the purpose or contents of the element. When provided,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
  /**
   * Set the semantic of the component’s content
   */
  accessibilityRole?:
    | AccessibilityRole
    | [AccessibilityRole, AccessibilityRole];
  /**
   * Changes how the View is positioned.
   */
  position?: Position | Responsive<Position>;
  /**
   * Specifies a two-dimensional translation of the View.
   */
  translate?: Translate | Responsive<Translate>;
  /**
   * Position children along the cross axis
   */
  blockAlignment?: BlockAlignment;
  /**
   * Position children along the main axis
   */
  inlineAlignment?: InlineAlignment;
}

/**
 *  View is a generic container component. Its contents will always be their
 * “natural” size, so this component can be useful in layout components (like `Grid`,
 * `BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.
 *
 * Note: View’s box model related properties like `padding`, `border`, `borderRadius`, and `borderColor` are implemented as
 * [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts).
 */
export const View = createRemoteComponent<'View', ViewProps>('View');
