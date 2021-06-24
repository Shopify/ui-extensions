import {createRemoteComponent} from '@remote-ui/core';

import {Responsive, CSSShorthand} from '../shared';

type Background =
  | 'surfacePrimary'
  | 'surfaceSecondary'
  | 'surfaceTertiary'
  | 'transparent';
type BorderColor = 'base' | 'emphasized';
type BorderRadius = 'base' | 'tight' | 'none';
type BorderStyle = 'base' | 'dotted' | 'none';
type BorderWidth = 'base' | 'thick';
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

export interface ViewProps {
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
   * Adjust the border style.
   *
   * To shorten the code, it is possible to specify all the border style properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base`
   * - [`base`, `none`] means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none`
   * - [`base`, `none`, `dotted`, `base`] means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base`
   */
  border?: CSSShorthand<BorderStyle> | Responsive<CSSShorthand<BorderStyle>>;

  /**
   * Adjust the border width.
   *
   * To shorten the code, it is possible to specify all the border width properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base`
   * - [`base`, `thick`] means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `thick`
   * - [`base`, `thick`, `thick`, `base`] means blockStart border width is `base`, inlineEnd border width is `thick`, blockEnd border width is `thick` and  blockStart border width is `base`
   */
  borderWidth?:
    | CSSShorthand<BorderWidth>
    | Responsive<CSSShorthand<BorderWidth>>;

  /**
   * Adjust the border color.
   */
  borderColor?: BorderColor | Responsive<BorderColor>;

  /**
   * Adjust the border radius.
   *
   * To shorten the code, it is possible to specify all the border width properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border radii are `base`
   * - [`base`, `none`] means blockStart and blockEnd border radii are `base`, inlineStart and inlineEnd border radii are `none`
   * - [`base`, `none`, `tight`, `base`] means blockStart border radius is `base`, inlineEnd border radius is `none`, blockEnd border radius is `tight` and  blockStart border radius is `base`
   */
  borderRadius?:
    | CSSShorthand<BorderRadius>
    | Responsive<CSSShorthand<BorderRadius>>;

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
