import {SizeKeyword} from './sizes';

/**
 * Defines the available padding size options using numeric scale values. Provides precise control over spacing with predetermined size increments.
 */
export type PaddingKeys = SizeKeyword | 'none';

export interface PaddingProps {
  /**
   * Adjusts the padding on all edges of the box using predefined spacing values.
   *
   * @default '0'
   */
  padding?: PaddingKeys;

  /**
   * Adjusts the padding on the block axis (vertical in horizontal writing modes). Overrides the block value from `padding`.
   *
   * @default '0'
   */
  paddingBlock?: PaddingKeys;

  /**
   * Adjusts the padding at the block-start edge (top in horizontal writing modes). Overrides the start value from `paddingBlock`.
   *
   * @default '0'
   */
  paddingBlockStart?: PaddingKeys;

  /**
   * Adjusts the padding at the block-end edge (bottom in horizontal writing modes). Overrides the end value from `paddingBlock`.
   *
   * @default '0'
   */
  paddingBlockEnd?: PaddingKeys;

  /**
   * Adjusts the padding on the inline axis (horizontal in horizontal writing modes). Overrides the inline value from `padding`.
   *
   * @default '0'
   */
  paddingInline?: PaddingKeys;

  /**
   * Adjusts the padding at the inline-start edge (left in left-to-right languages). Overrides the start value from `paddingInline`.
   *
   * @default '0'
   */
  paddingInlineStart?: PaddingKeys;

  /**
   * Adjusts the padding at the inline-end edge (right in left-to-right languages). Overrides the end value from `paddingInline`.
   *
   * @default '0'
   */
  paddingInlineEnd?: PaddingKeys;
}

/**
 * Defines exact size measurements without automatic or unconstrained options. Limited to specific pixel values, percentages, or zero.
 *
 * - `${number}px`: An exact pixel measurement for precise sizing that remains consistent across different contexts.
 * - `${number}%`: A percentage-based size relative to the parent container for responsive sizing that adapts proportionally.
 * - `'0'`: A zero size value that completely eliminates any dimension in that direction.
 */
export type SizeUnits = `${number}px` | `${number}%` | `0`;

/**
 * Defines size values that can be specified as exact measurements or no constraint. Supports pixel values, percentages, zero, or no maximum limit.
 *
 * - `none`: An unconstrained size value that allows the element to grow without restriction, limited only by available space.
 * - `${number}px`: An exact pixel measurement for precise sizing limits that remain consistent across different contexts.
 * - `${number}%`: A percentage-based size relative to the parent container for responsive constraints that adapt to different screen sizes.
 * - `'0'`: A zero size constraint that prevents the element from having any dimension in that direction.
 */
export type SizeUnitsOrNone = SizeUnits | 'none';

/**
 * Defines size values that can be specified as exact measurements or automatic sizing. Supports pixel values, percentages, zero, or automatic sizing based on content.
 *
 * - `auto`: An automatic sizing value that expands or contracts the element to fit its content while respecting size constraints.
 * - `${number}px`: An exact pixel measurement for precise, fixed sizing that remains consistent across different contexts.
 * - `${number}%`: A percentage-based size relative to the parent container for responsive layouts that adapt to different screen sizes.
 * - `'0'`: A zero size value that completely collapses the element in that dimension.
 */
export type SizeUnitsOrAuto = SizeUnits | 'auto';

export interface SizingProps {
  /**
   * Adjusts the block size (height in horizontal writing modes). Use `'auto'` to take the block size of the box's children.
   * Learn more about [block-size on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;

  /**
   * Adjusts the minimum block size (min-height in horizontal writing modes).
   * Learn more about [min-block-size on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;

  /**
   * Adjusts the maximum block size (max-height in horizontal writing modes).
   * Learn more about [max-block-size on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;

  /**
   * Adjusts the inline size (width in horizontal writing modes). Use `'auto'` to take the inline size of the box's children.
   * Learn more about [inline-size on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;

  /**
   * Adjusts the minimum inline size (min-width in horizontal writing modes).
   * Learn more about [min-inline-size on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;

  /**
   * Adjusts the maximum inline size (max-width in horizontal writing modes).
   * Learn more about [max-inline-size on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
}
