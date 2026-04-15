/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  BoxProps$1,
  StackProps$1,
  MaybeAllValuesShorthandProperty,
  SizeUnitsOrAuto,
  SizeUnits,
  SizeUnitsOrNone,
  JustifyContentKeyword,
  AlignItemsKeyword,
  AlignContentKeyword,
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

export type AlignedStackProps = Required<StackProps$1>;
export type ResponsiveStackProps = MakeResponsivePick<
  AlignedStackProps,
  'gap' | 'rowGap' | 'columnGap' | 'direction'
>;
/**
 * The properties for the stack component. A stack arranges its children in a single direction with controlled spacing and alignment along both axes.
 * @publicDocs
 */
export interface StackProps
  extends BoxProps,
    Pick<
      Required<AlignedStackProps>,
      'justifyContent' | 'alignItems' | 'alignContent'
    > {
  /**
   * Controls the distribution of children along the inline axis (horizontally in horizontal writing modes).
   *
   * Use this to position items along the primary axis of the stack - horizontally for inline stacks or vertically for block stacks when wrapped into multiple lines.
   *
   * @default 'normal'
   */
  justifyContent: JustifyContentKeyword;
  /**
   * Controls the alignment of children along the block axis (vertically in horizontal writing modes).
   *
   * Use this to align items perpendicular to the stack direction - vertically for inline stacks or horizontally for block stacks.
   *
   * @default 'normal'
   */
  alignItems: AlignItemsKeyword;
  /**
   * Controls the distribution of lines along the block axis when content wraps into multiple lines.
   *
   * This property only affects stacks with wrapping content. For single-line stacks, use `alignItems` instead.
   *
   * @default 'normal'
   */
  alignContent: AlignContentKeyword;
  /**
   * The spacing between children in the stack. You can provide a single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value to apply the same spacing to both axes (for example, `'large-100'`), or a pair of values (for example, `'large-100 large-500'`) to set different spacing for the block and inline axes. This property also accepts [responsive values](/docs/api/polaris/using-web-components#responsive-values) using container query syntax.
   *
   * @default 'none'
   */
  gap: ResponsiveStackProps['gap'];
  /**
   * The spacing between children in the block axis (vertical in horizontal writing modes). This property overrides the row spacing set by the `gap` property. You can provide a single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value (for example, `'large-100'`), or a [responsive value](/docs/api/polaris/using-web-components#responsive-values) using container query syntax.
   *
   * @default '' - meaning no override
   */
  rowGap: ResponsiveStackProps['rowGap'];
  /**
   * The spacing between children in the inline axis (horizontal in left-to-right languages). This property overrides the column spacing set by the `gap` property. You can provide a single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value (for example, `'large-100'`), or a [responsive value](/docs/api/polaris/using-web-components#responsive-values) using container query syntax.
   *
   * @default '' - meaning no override
   */
  columnGap: ResponsiveStackProps['columnGap'];
  /**
   * The direction in which the stack's children are laid out. Use `'inline'` to arrange children horizontally (with wrapping enabled), or `'block'` to arrange them vertically (without wrapping). This property also accepts [responsive values](/docs/api/polaris/using-web-components#responsive-values) using container query syntax.
   *
   * @default 'block'
   *
   * @implementation The content will wrap if the direction is `'inline'`, and won't wrap if the direction is `'block'`.
   */
  direction: ResponsiveStackProps['direction'];
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

/**
 * A stack is a layout component that arranges its children in a single direction with controlled spacing and alignment.
 */
declare class Stack extends BoxElement implements StackProps {
  constructor();
  /**
   * The direction in which the stack's children are arranged.
   */
  accessor direction: StackProps['direction'];
  /**
   * Controls the distribution of children along the inline axis (horizontally in horizontal writing modes).
   */
  accessor justifyContent: StackProps['justifyContent'];
  /**
   * Controls the alignment of children along the block axis (vertically in horizontal writing modes).
   */
  accessor alignItems: StackProps['alignItems'];
  /**
   * Controls the distribution of lines along the block axis when content wraps into multiple lines.
   */
  accessor alignContent: StackProps['alignContent'];
  /**
   * The spacing between the stack's children.
   */
  accessor gap: StackProps['gap'];
  /**
   * The spacing between rows in the stack.
   */
  accessor rowGap: StackProps['rowGap'];
  /**
   * The spacing between columns in the stack.
   */
  accessor columnGap: StackProps['columnGap'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Stack;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: StackJSXProps & PreactBaseElementPropsWithChildren<Stack>;
    }
  }
}

declare const tagName = 's-stack';
/**
 * The properties for the stack component when it's used in JSX.
 * @publicDocs
 */
export interface StackJSXProps
  extends Partial<StackProps>,
    Pick<StackProps$1, 'id' | 'children'> {
  /**
   * The child elements to render inside the stack.
   */
  children?: ComponentChildren;
}

export {Stack};
export type {StackJSXProps};
