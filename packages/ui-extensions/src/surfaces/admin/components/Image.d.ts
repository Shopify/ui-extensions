/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  BoxProps$1,
  ImageProps$1,
  MaybeAllValuesShorthandProperty,
  SizeUnitsOrAuto,
  SizeUnits,
  SizeUnitsOrNone,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}

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

/**
 * The properties for the image component. An image displays pictures with configurable sizing, loading behavior, and borders. Properties include `src` for the image URL, `alt` for accessibility text, `aspectRatio` for sizing, `loading` for lazy loading, and border styling options.
 * @publicDocs
 */
export interface ImageProps
  extends Required<
      Pick<
        ImageProps$1,
        | 'alt'
        | 'loading'
        | 'src'
        | 'accessibilityRole'
        | 'inlineSize'
        | 'srcSet'
        | 'sizes'
        | 'aspectRatio'
        | 'objectFit'
      >
    >,
    Required<
      Pick<
        BoxProps,
        | 'border'
        | 'borderColor'
        | 'borderRadius'
        | 'borderStyle'
        | 'borderWidth'
      >
    > {
  /**
   * The URL of the image to display. You can provide an absolute or relative URL pointing to the image file.
   */
  src: ImageProps$1['src'];
  /**
   * A set of source images with different sizes for responsive loading. Use this to provide multiple image sizes for different screen resolutions (for example, `'image-320w.jpg 320w, image-640w.jpg 640w'`).
   */
  srcSet: ImageProps$1['srcSet'];
  /**
   * The sizes of the image at different viewport widths. Use this with `srcSet` to tell the browser which image to load (for example, `'(max-width: 320px) 280px, 640px'`).
   */
  sizes: ImageProps$1['sizes'];
  /**
   * Alternative text that describes the image for screen readers. This text should convey the meaning or content of the image to users who can't see it.
   */
  alt: ImageProps$1['alt'];
  /**
   * The aspect ratio of the image as a width-to-height ratio (for example, `'16/9'` or `'1'`). This helps prevent layout shifts while the image loads.
   */
  aspectRatio: ImageProps$1['aspectRatio'];
  /**
   * How the image should be resized to fit its container. Choose `'cover'` to fill the container while maintaining aspect ratio (cropping if needed), or `'contain'` to fit the entire image within the container.
   */
  objectFit: ImageProps$1['objectFit'];
  /**
   * When the image should be loaded. Use `'lazy'` to defer loading until the image is near the viewport, or `'eager'` to load immediately.
   */
  loading: ImageProps$1['loading'];
  /**
   * The accessibility role for the image. Set this to provide semantic meaning for screen readers.
   */
  accessibilityRole: ImageProps$1['accessibilityRole'];
  /**
   * The inline size (width in horizontal writing modes) of the image. You can use size units like `'100px'` or `'50%'`.
   */
  inlineSize: ImageProps$1['inlineSize'];
  /**
   * Whether to show a border around the image. Set to `true` to display a border, or `false` to hide it.
   */
  border: ImageProps$1['border'];
  /**
   * The width of the border around the image. You can use a single value to apply the same width to all sides, or use the 1-to-4-value syntax to control individual sides.
   */
  borderWidth: ImageProps$1['borderWidth'];
  /**
   * The style of the border around the image. You can use a single value to apply the same style to all sides, or use the 1-to-4-value syntax to control individual sides.
   */
  borderStyle: ImageProps$1['borderStyle'];
  /**
   * The color of the border around the image. Choose from `'subdued'`, `'base'`, or `'strong'` to control the visual emphasis.
   */
  borderColor: ImageProps$1['borderColor'];
  /**
   * The radius of the border corners around the image. You can use a single value to apply the same radius to all corners, or use the 1-to-4-value syntax to control individual corners.
   */
  borderRadius: ImageProps$1['borderRadius'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * An image displays pictures with configurable sizing, loading behavior, and borders.
 */
declare class Image extends PolarisCustomElement implements ImageProps {
  /**
   * The URL of the image to display.
   */
  accessor src: ImageProps['src'];
  /**
   * A set of source images with different sizes for responsive loading.
   */
  accessor srcSet: ImageProps['srcSet'];
  /**
   * The sizes of the image at different viewport widths.
   */
  accessor sizes: ImageProps['sizes'];
  /**
   * Alternative text that describes the image for screen readers.
   */
  accessor alt: ImageProps['alt'];
  /**
   * The aspect ratio of the image as a width-to-height ratio.
   */
  accessor aspectRatio: ImageProps['aspectRatio'];
  /**
   * How the image should be resized to fit its container.
   */
  accessor objectFit: ImageProps['objectFit'];
  /**
   * When the image should be loaded.
   */
  accessor loading: ImageProps['loading'];
  /**
   * The accessibility role for the image.
   */
  accessor accessibilityRole: ImageProps['accessibilityRole'];
  /**
   * The inline size (width in horizontal writing modes) of the image.
   */
  accessor inlineSize: ImageProps['inlineSize'];
  /**
   * Whether to show a border around the image.
   */
  accessor border: ImageProps['border'];
  /**
   * The width of the border around the image.
   */
  accessor borderWidth: ImageProps['borderWidth'];
  /**
   * The style of the border around the image.
   */
  accessor borderStyle: ImageProps['borderStyle'];
  /**
   * The color of the border around the image.
   */
  accessor borderColor: ImageProps['borderColor'];
  /**
   * The radius of the border corners around the image.
   */
  accessor borderRadius: ImageProps['borderRadius'];
  /**
   * A callback that's fired when the image has loaded successfully.
   */
  accessor onload: CallbackEventListener<typeof tagName> | null;
  /**
   * A callback that's fired when the image fails to load.
   */
  accessor onerror: OnErrorEventHandler;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Image;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ImageJSXProps & PreactBaseElementProps<Image>;
    }
  }
}

declare const tagName = 's-image';
/**
 * The properties for the image component when it's used in JSX.
 * @publicDocs
 */
export interface ImageJSXProps
  extends Partial<ImageProps>,
    Pick<ImageProps$1, 'id'> {
  /**
   * A callback that's fired when the image fails to load.
   */
  onError?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's fired when the image has loaded successfully.
   */
  onLoad?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Image};
export type {ImageJSXProps};
