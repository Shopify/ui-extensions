/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  BoxProps$1,
  GridProps$1,
  MaybeAllValuesShorthandProperty,
  SizeUnitsOrAuto,
  SizeUnits,
  SizeUnitsOrNone,
  AlignItemsKeyword,
  JustifyItemsKeyword,
  AlignContentKeyword,
  JustifyContentKeyword,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export type MakeResponsive<T> = T | `@container${string}`;
/**
 * Makes a property's value potentially responsive.
 *
 * @example
 * type Example = {
 *   color: boolean;
 *   margin: string;
 *   padding: number;
 * }
 * type Result = MakeResponsivePick<Example, 'color' | 'margin' | 'padding'>;
 * // Result = {
 *   color: boolean | `@container${string}`;
 *   margin: string | `@container${string}`;
 *   padding: number | `@container${string}`;
 * }
 */
export type MakeResponsivePick<TType, TProperty extends keyof TType> = {
  [P in TProperty]: MakeResponsive<TType[P]>;
};

export type RequiredBoxProps = Required<BoxProps$1>;
export type BoxBorderRadii = Extract<
  RequiredBoxProps['borderRadius'],
  | 'none'
  | 'small-200'
  | 'small-100'
  | 'small'
  | 'base'
  | 'large'
  | 'large-100'
  | 'large-200'
>;
export type BoxBorderStyles = Extract<
  RequiredBoxProps['borderStyle'],
  'none' | 'solid' | 'dashed' | 'auto'
>;
export type ResponsiveBoxProps = MakeResponsivePick<
  RequiredBoxProps,
  | 'padding'
  | 'paddingBlock'
  | 'paddingBlockStart'
  | 'paddingBlockEnd'
  | 'paddingInline'
  | 'paddingInlineStart'
  | 'paddingInlineEnd'
  | 'display'
>;
export interface BoxProps
  extends Pick<
    RequiredBoxProps,
    | 'accessibilityLabel'
    | 'accessibilityRole'
    | 'accessibilityVisibility'
    | 'background'
    | 'blockSize'
    | 'border'
    | 'borderColor'
    | 'borderRadius'
    | 'borderStyle'
    | 'borderWidth'
    | 'inlineSize'
    | 'maxBlockSize'
    | 'maxInlineSize'
    | 'minBlockSize'
    | 'minInlineSize'
    | 'overflow'
  > {
  /**
   * Adjust the background of the component.
   *
   * @default 'transparent'
   */
  background: Extract<
    RequiredBoxProps['background'],
    'transparent' | 'base' | 'subdued' | 'strong'
  >;
  /**
   * Adjust the width of the border.
   *
   * @default '' - meaning no override
   */
  borderWidth:
    | MaybeAllValuesShorthandProperty<
        Extract<
          RequiredBoxProps['borderWidth'],
          'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'none'
        >
      >
    | Extract<RequiredBoxProps['borderWidth'], ''>;
  /**
   * Adjust the style of the border.
   *
   * @default '' - meaning no override
   */
  borderStyle:
    | MaybeAllValuesShorthandProperty<BoxBorderStyles>
    | Extract<RequiredBoxProps['borderStyle'], ''>;
  /**
   * Adjust the color of the border.
   *
   * @default '' - meaning no override
   */
  borderColor: Extract<
    RequiredBoxProps['borderColor'],
    'subdued' | 'base' | 'strong' | ''
  >;
  /**
   * Adjust the radius of the border.
   *
   * @default 'none'
   */
  borderRadius: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
  /**
   * Adjust the padding of all edges.
   *
   * [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.
   *
   * `padding` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default 'none'
   */
  padding: ResponsiveBoxProps['padding'];
  /**
   * Adjust the block-padding.
   *
   * - `large none` means block-start padding is `large`, block-end padding is `none`.
   *
   * This overrides the block value of `padding`.
   *
   * `paddingBlock` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlock: ResponsiveBoxProps['paddingBlock'];
  /**
   * Adjust the block-start padding.
   *
   * This overrides the block-start value of `paddingBlock`.
   *
   * `paddingBlockStart` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart: ResponsiveBoxProps['paddingBlockStart'];
  /**
   * Adjust the block-end padding.
   *
   * This overrides the block-end value of `paddingBlock`.
   *
   * `paddingBlockEnd` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd: ResponsiveBoxProps['paddingBlockEnd'];
  /**
   * Adjust the inline padding.
   *
   * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
   *
   * This overrides the inline value of `padding`.
   *
   * `paddingInline` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInline: ResponsiveBoxProps['paddingInline'];
  /**
   * Adjust the inline-start padding.
   *
   * This overrides the inline-start value of `paddingInline`.
   *
   * `paddingInlineStart` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart: ResponsiveBoxProps['paddingInlineStart'];
  /**
   * Adjust the inline-end padding.
   *
   * This overrides the inline-end value of `paddingInline`.
   *
   * `paddingInlineEnd` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd: ResponsiveBoxProps['paddingInlineEnd'];
  /**
   * Sets the outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
   *
   * - `auto` the component's initial value. The actual value depends on the component and context.
   * - `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
   *
   * @default 'auto'
   */
  display: ResponsiveBoxProps['display'];
  /**
   * Adjust the [block size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
   *
   * @default 'auto'
   */
  blockSize: SizeUnitsOrAuto;
  /**
   * Adjust the [minimum block size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).
   *
   * @default '0'
   */
  minBlockSize: SizeUnits;
  /**
   * Adjust the [maximum block size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).
   *
   * @default 'none'
   */
  maxBlockSize: SizeUnitsOrNone;
  /**
   * Adjust the [inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   *
   * @default 'auto'
   */
  inlineSize: SizeUnitsOrAuto;
  /**
   * Adjust the [minimum inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).
   *
   * @default '0'
   */
  minInlineSize: SizeUnits;
  /**
   * Adjust the [maximum inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).
   *
   * @default 'none'
   */
  maxInlineSize: SizeUnitsOrNone;
}

export type RequiredAlignedProps = Required<GridProps$1>;
export type ResponsiveGridProps = MakeResponsivePick<
  RequiredAlignedProps,
  'rowGap' | 'columnGap' | 'gap' | 'gridTemplateColumns' | 'gridTemplateRows'
>;
/**
 * The properties for the grid component. A grid provides precise control over rows and columns, with powerful alignment and sizing options for both individual items and the entire grid structure.
 * @publicDocs
 */
export interface GridProps
  extends BoxProps,
    Required<
      Pick<
        GridProps$1,
        | 'alignItems'
        | 'justifyItems'
        | 'placeItems'
        | 'alignContent'
        | 'justifyContent'
        | 'placeContent'
      >
    > {
  /**
   * The alignment of grid items along the block axis (vertical in horizontal writing modes). You can choose values like `'start'`, `'center'`, `'end'`, or `'stretch'` to control how items are positioned within their grid areas.
   *
   * @default '' - meaning no override
   */
  alignItems: AlignItemsKeyword | '';
  /**
   * The alignment of grid items along the inline axis (horizontal in left-to-right languages). You can choose values like `'start'`, `'center'`, or `'end'` to control how items are positioned within their grid areas.
   *
   * @default '' - meaning no override
   */
  justifyItems: JustifyItemsKeyword | '';
  /**
   * A shorthand property for setting both `justifyItems` and `alignItems` at once. You can provide either a single value (which applies to both axes) or two values separated by a space (the first for `alignItems`, the second for `justifyItems`).
   *
   * @default 'normal normal'
   */
  placeItems: `${AlignItemsKeyword} ${JustifyItemsKeyword}` | AlignItemsKeyword;
  /**
   * The alignment of the entire grid along the block axis when there's extra space in the grid container. This property overrides the block-axis value set by the `placeContent` property.
   *
   * @default '' - meaning no override
   */
  alignContent: AlignContentKeyword | '';
  /**
   * The alignment of the entire grid along the inline axis when there's extra space in the grid container. This property overrides the inline-axis value set by the `placeContent` property.
   *
   * @default '' - meaning no override
   */
  justifyContent: JustifyContentKeyword | '';
  /**
   * A shorthand property for setting both `justifyContent` and `alignContent` at once. You can provide either a single value (which applies to both axes) or two values separated by a space (the first for `alignContent`, the second for `justifyContent`).
   *
   * @default 'normal normal'
   */
  placeContent:
    | `${AlignContentKeyword} ${JustifyContentKeyword}`
    | AlignContentKeyword;
  /**
   * The spacing between grid rows and columns. You can provide a single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value to apply the same spacing to both axes (for example, `'large-100'`), or a pair of values (for example, `'large-100 large-500'`) to set different spacing for rows and columns. This property also accepts [responsive values](/docs/api/polaris/using-web-components#responsive-values) using container query syntax.
   *
   * @default 'none'
   */
  gap: ResponsiveGridProps['gap'];
  /**
   * The spacing between grid rows. This property overrides the row spacing set by the `gap` property. You can provide a single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value (for example, `'large-100'`), or a [responsive value](/docs/api/polaris/using-web-components#responsive-values) using container query syntax.
   *
   * @default '' - meaning no override
   */
  rowGap: ResponsiveGridProps['rowGap'];
  /**
   * The spacing between grid columns. This property overrides the column spacing set by the `gap` property. You can provide a single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value (for example, `'large-100'`), or a [responsive value](/docs/api/polaris/using-web-components#responsive-values) using container query syntax.
   *
   * @default '' - meaning no override
   */
  columnGap: ResponsiveGridProps['columnGap'];
  /**
   * The number of columns and their sizes. You can use [track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes) (for example, `'1fr auto'` or `'repeat(3, 1fr)'`) to define the grid structure. This property also accepts [responsive values](/docs/api/polaris/using-web-components#responsive-values) using container query syntax.
   *
   * @default 'none'
   */
  gridTemplateColumns: ResponsiveGridProps['gridTemplateColumns'];
  /**
   * The number of rows and their sizes. You can use [track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes) (for example, `'1fr auto'` or `'repeat(3, 100px)'`) to define the grid structure. This property also accepts [responsive values](/docs/api/polaris/using-web-components#responsive-values) using container query syntax.
   *
   * @default 'none'
   */
  gridTemplateRows: ResponsiveGridProps['gridTemplateRows'];
}

/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare class BoxElement extends PolarisCustomElement implements BoxProps {
  constructor(renderImpl: RenderImpl);
  accessor accessibilityRole: BoxProps['accessibilityRole'];
  accessor background: BoxProps['background'];
  accessor blockSize: BoxProps['blockSize'];
  accessor minBlockSize: BoxProps['minBlockSize'];
  accessor maxBlockSize: BoxProps['maxBlockSize'];
  accessor inlineSize: BoxProps['inlineSize'];
  accessor minInlineSize: BoxProps['minInlineSize'];
  accessor maxInlineSize: BoxProps['maxInlineSize'];
  accessor overflow: BoxProps['overflow'];
  accessor padding: BoxProps['padding'];
  accessor paddingBlock: BoxProps['paddingBlock'];
  accessor paddingBlockStart: BoxProps['paddingBlockStart'];
  accessor paddingBlockEnd: BoxProps['paddingBlockEnd'];
  accessor paddingInline: BoxProps['paddingInline'];
  accessor paddingInlineStart: BoxProps['paddingInlineStart'];
  accessor paddingInlineEnd: BoxProps['paddingInlineEnd'];
  accessor border: BoxProps['border'];
  accessor borderWidth: BoxProps['borderWidth'];
  accessor borderStyle: BoxProps['borderStyle'];
  accessor borderColor: BoxProps['borderColor'];
  accessor borderRadius: BoxProps['borderRadius'];
  accessor accessibilityLabel: BoxProps['accessibilityLabel'];
  accessor accessibilityVisibility: BoxProps['accessibilityVisibility'];
  accessor display: BoxProps['display'];
}

/**
 * A grid is a layout component that arranges its children in rows and columns with precise control over sizing and alignment.
 */
declare class Grid extends BoxElement implements GridProps {
  constructor();
  /**
   * The template that defines the grid columns.
   */
  accessor gridTemplateColumns: GridProps['gridTemplateColumns'];
  /**
   * The template that defines the grid rows.
   */
  accessor gridTemplateRows: GridProps['gridTemplateRows'];
  /**
   * The alignment of grid items along the inline axis.
   */
  accessor justifyItems: GridProps['justifyItems'];
  /**
   * The alignment of grid items along the block axis.
   */
  accessor alignItems: GridProps['alignItems'];
  /**
   * A shorthand for setting both `alignItems` and `justifyItems`.
   */
  accessor placeItems: GridProps['placeItems'];
  /**
   * The alignment of the grid along the inline axis.
   */
  accessor justifyContent: GridProps['justifyContent'];
  /**
   * The alignment of the grid along the block axis.
   */
  accessor alignContent: GridProps['alignContent'];
  /**
   * A shorthand for setting both `alignContent` and `justifyContent`.
   */
  accessor placeContent: GridProps['placeContent'];
  /**
   * The spacing between grid rows and columns.
   */
  accessor gap: GridProps['gap'];
  /**
   * The spacing between grid rows.
   */
  accessor rowGap: GridProps['rowGap'];
  /**
   * The spacing between grid columns.
   */
  accessor columnGap: GridProps['columnGap'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Grid;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: GridJSXProps & PreactBaseElementPropsWithChildren<Grid>;
    }
  }
}

declare const tagName = 's-grid';
/**
 * The properties for the grid component when it's used in JSX.
 * @publicDocs
 */
export interface GridJSXProps
  extends Partial<GridProps>,
    Pick<GridProps$1, 'id' | 'children'> {
  /**
   * The child elements to render inside the grid.
   */
  children?: ComponentChildren;
}

export {Grid};
export type {GridJSXProps};
