import {createRemoteComponent} from '@remote-ui/core';

export type ViewportSize = 'aboveSmall' | 'aboveMedium' | 'aboveLarge';
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
  maxInlineSize?: number;

  /*
   * Adjust the padding.
   *
   * To shorten the code, it is possible to specify all the padding properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart paddings are `base`
   * - [`base`, `none`] means blockStart and blockEnd paddings are `base`, inlineStart and inlineEnd paddings are `none`
   * - [`base`, `none`, `loose`, `tight`] means blockStart padding is `base`, inlineEnd padding is `none`, blockEnd padding is `loose` and  blockStart padding is `tight`
   */
  padding?: Spacing | [Spacing, Spacing] | [Spacing, Spacing, Spacing, Spacing];

  /**
   * Adjust the background.
   */
  background?: Background;

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
  border?:
    | BorderStyle
    | [BorderStyle, BorderStyle]
    | [BorderStyle, BorderStyle, BorderStyle, BorderStyle];

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
    | BorderWidth
    | [BorderWidth, BorderWidth]
    | [BorderWidth, BorderWidth, BorderWidth, BorderWidth];

  /**
   * Adjust the border color.
   */
  borderColor?: BorderColor;

  /*
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
    | BorderRadius
    | [BorderRadius, BorderRadius]
    | [BorderRadius, BorderRadius, BorderRadius, BorderRadius];

  /**
   * Sizes at different media.
   */
  media?: Media[];
}

interface Media {
  /*
   * Specifies the viewport size these instruction will apply to.
   */
  viewportSize: ViewportSize;

  /**
   * Adjust the maximum inline size for this viewport.
   *
   * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
   *
   * Examples:
   * - `500` represents `500px`
   * - `0.5` represents `50%`
   * - `1` represents `100%`
   */
  maxInlineSize?: number;

  /*
   * Adjust the padding for this viewport.
   *
   * To shorten the code, it is possible to specify all the padding properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart paddings are `base`
   * - [`base`, `none`] means blockStart and blockEnd paddings are `base`, inlineStart and inlineEnd paddings are `none`
   * - [`base`, `none`, `loose`, `tight`] means blockStart padding is `base`, inlineEnd padding is `none`, blockEnd padding is `loose` and  blockStart padding is `tight`
   */
  padding?: Spacing | [Spacing, Spacing] | [Spacing, Spacing, Spacing, Spacing];

  /**
   * Adjust the background for this viewport.
   */
  background?: Background;

  /**
   * Adjust the border style for this viewport.
   *
   * To shorten the code, it is possible to specify all the border style properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base`
   * - [`base`, `none`] means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none`
   * - [`base`, `none`, `dotted`, `base`] means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base`
   */
  border?:
    | BorderStyle
    | [BorderStyle, BorderStyle]
    | [BorderStyle, BorderStyle, BorderStyle, BorderStyle];

  /**
   * Adjust the border width for this viewport.
   *
   * To shorten the code, it is possible to specify all the border width properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base`
   * - [`base`, `thick`] means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `thick`
   * - [`base`, `thick`, `thick`, `base`] means blockStart border width is `base`, inlineEnd border width is `thick`, blockEnd border width is `thick` and  blockStart border width is `base`
   */
  borderWidth?:
    | BorderWidth
    | [BorderWidth, BorderWidth]
    | [BorderWidth, BorderWidth, BorderWidth, BorderWidth];

  /**
   * Adjust the border color for this viewport.
   */
  borderColor?: BorderColor;

  /*
   * Adjust the border radius or this viewport.
   *
   * To shorten the code, it is possible to specify all the border width properties in one property.
   *
   * Examples:
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart border radii are `base`
   * - [`base`, `none`] means blockStart and blockEnd border radii are `base`, inlineStart and inlineEnd border radii are `none`
   * - [`base`, `none`, `tight`, `base`] means blockStart border radius is `base`, inlineEnd border radius is `none`, blockEnd border radius is `tight` and  blockStart border radius is `base`
   */
  borderRadius?:
    | BorderRadius
    | [BorderRadius, BorderRadius]
    | [BorderRadius, BorderRadius, BorderRadius, BorderRadius];
}

/**
 *  View is a generic container component. Its contents will always be their
 * “natural” size, so this component can be useful in layout components (like `Layout`, `Tiles`,
 * `BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.
 */
export const View = createRemoteComponent<'View', ViewProps>('View');
