/** VERSION: 1.19.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  BoxProps$1,
  GridProps$1,
  MaybeAllValuesShorthandProperty,
  SizeUnits,
  AlignItemsKeyword,
  JustifyItemsKeyword,
  AlignContentKeyword,
  JustifyContentKeyword,
  ComponentChild,
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
  background: Extract<
    RequiredBoxProps['background'],
    'transparent' | 'base' | 'subdued' | 'strong'
  >;
  borderWidth:
    | MaybeAllValuesShorthandProperty<
        Extract<
          RequiredBoxProps['borderWidth'],
          'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'none'
        >
      >
    | Extract<RequiredBoxProps['borderWidth'], ''>;
  borderStyle:
    | MaybeAllValuesShorthandProperty<BoxBorderStyles>
    | Extract<RequiredBoxProps['borderStyle'], ''>;
  borderColor: Extract<
    RequiredBoxProps['borderColor'],
    'subdued' | 'base' | 'strong' | ''
  >;
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
  blockSize: SizeUnits | 'auto';
  minBlockSize: SizeUnits | '0';
  maxBlockSize: SizeUnits | 'none';
  inlineSize: SizeUnits | 'auto';
  minInlineSize: SizeUnits | '0';
  maxInlineSize: SizeUnits | 'none';
}

export type RequiredAlignedProps = Required<GridProps$1>;
export type ResponsiveGridProps = MakeResponsivePick<
  RequiredAlignedProps,
  'rowGap' | 'columnGap' | 'gap'
>;
export interface GridProps
  extends BoxProps,
    Required<
      Pick<
        GridProps$1,
        | 'gridTemplateColumns'
        | 'gridTemplateRows'
        | 'alignItems'
        | 'justifyItems'
        | 'placeItems'
        | 'alignContent'
        | 'justifyContent'
        | 'placeContent'
      >
    > {
  alignItems: AlignItemsKeyword | '';
  justifyItems: JustifyItemsKeyword | '';
  placeItems: `${AlignItemsKeyword} ${JustifyItemsKeyword}` | AlignItemsKeyword;
  alignContent: AlignContentKeyword | '';
  justifyContent: JustifyContentKeyword | '';
  placeContent:
    | `${AlignContentKeyword} ${JustifyContentKeyword}`
    | AlignContentKeyword;
  /**
   * Adjust spacing between elements.
   *
   * `gap` can either accept:
   * - a single SpacingKeyword value applied to both axes (e.g. `large-100`)
   * - OR a pair of values (eg `large-100 large-500`) can be used to set the inline and block axes respectively
   * - OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.
   *
   * @default 'none'
   */
  gap: ResponsiveGridProps['gap'];
  /**
   * Adjust spacing between elements in the block axis.
   *
   * This overrides the row value of `gap`.
   * `rowGap` either accepts:
   * - a single SpacingKeyword value (e.g. `large-100`)
   * - OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  rowGap: ResponsiveGridProps['rowGap'];
  /**
   * Adjust spacing between elements in the inline axis.
   *
   * This overrides the column value of `gap`.
   * `columnGap` either accepts:
   * - a single SpacingKeyword value (e.g. `large-100`)
   * - OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  columnGap: ResponsiveGridProps['columnGap'];
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

export type Styles = string;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChild;
  styles?: Styles;
};
export interface ActivationEventEsque {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  button: number;
}
export interface ClickOptions {
  /**
   * The event you want to influence the synthetic click.
   */
  sourceEvent?: ActivationEventEsque;
}
/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass {
  /** @private */
  static get observedAttributes(): string[];
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    ...options
  }: RenderImpl);

  /** @private */
  setAttribute(name: string, value: string): void;
  /** @private */
  attributeChangedCallback(name: string): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
  /**
   * Queue a run of the render function.
   * You shouldn't need to call this manually - it should be handled by changes to @property values.
   * @private
   */
  queueRender(): void;
  /**
   * Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.
   *
   * For example, if the `sourceEvent` was a middle click, or has particular keys held down,
   * components will attempt to produce the desired behavior on links, such as opening the page in the background tab.
   * @private
   * @param options
   */
  click({sourceEvent}?: ClickOptions): void;
}

declare class BoxElement extends PreactCustomElement implements BoxProps {
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

declare class Grid extends BoxElement implements GridProps {
  constructor();
  accessor gridTemplateColumns: GridProps['gridTemplateColumns'];
  accessor gridTemplateRows: GridProps['gridTemplateRows'];
  accessor justifyItems: GridProps['justifyItems'];
  accessor alignItems: GridProps['alignItems'];
  accessor placeItems: GridProps['placeItems'];
  accessor justifyContent: GridProps['justifyContent'];
  accessor alignContent: GridProps['alignContent'];
  accessor placeContent: GridProps['placeContent'];
  accessor gap: GridProps['gap'];
  accessor rowGap: GridProps['rowGap'];
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
export interface GridJSXProps
  extends Partial<GridProps>,
    Pick<GridProps$1, 'id'> {}

export {Grid};
export type {GridJSXProps};
