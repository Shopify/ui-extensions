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

/**
 * A version of the box properties with all fields required.
 * @publicDocs
 */
export type RequiredBoxProps = Required<BoxProps$1>;
/**
 * The allowed border radius values for a box component.
 * @publicDocs
 */
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
/**
 * The allowed border style values for a box component.
 * @publicDocs
 */
export type BoxBorderStyles = Extract<
  RequiredBoxProps['borderStyle'],
  'none' | 'solid' | 'dashed' | 'auto'
>;
/**
 * The box properties that support responsive values through container queries.
 * @publicDocs
 */
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
/**
 * The properties for the box component. A box provides control over layout, spacing, sizing, borders, and background styling for its content.
 * @publicDocs
 */
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
   * The background color of the box. You can choose from `'transparent'`, `'base'`, `'subdued'`, or `'strong'` to control the visual emphasis of the background.
   *
   * @default 'transparent'
   */
  background: Extract<
    RequiredBoxProps['background'],
    'transparent' | 'base' | 'subdued' | 'strong'
  >;
  /**
   * Controls the thickness of the border on all sides. When set, this overrides the width value specified in the `border` property.
   *
   * - `small`: Thin border for subtle definition.
   * - `small-100`: Extra thin border for minimal emphasis.
   * - `base`: Standard border width.
   * - `large`: Thick border for strong emphasis.
   * - `large-100`: Extra thick border for maximum prominence.
   * - `none`: No border.
   *
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different widths per side.
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
   * Controls the visual style of the border on all sides (solid, dashed, auto, or none).
   *
   * When set, this overrides the style value specified in the `border` property.
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box)for specifying different styles per side: one value applies to all sides,
   * two values apply to block and inline sides, and so on.
   *
   * @default '' - meaning no override
   */
  borderStyle:
    | MaybeAllValuesShorthandProperty<BoxBorderStyles>
    | Extract<RequiredBoxProps['borderStyle'], ''>;
  /**
   * Controls the color of the border using the design system's color scale.
   *
   * When set, this overrides the color value specified in the `border` property.
   * Choose from `subdued`, `base`, or `strong` to match the visual emphasis needed.
   *
   * @default '' - meaning no override
   */
  borderColor: Extract<
    RequiredBoxProps['borderColor'],
    'subdued' | 'base' | 'strong' | ''
  >;
  /**
   * Controls the roundedness of the element's corners using the design system's radius scale.
   *
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different radii per corner. Use this to create rounded corners or fully rounded elements.
   * One value applies to all corners, two values apply to opposite corners, and so on.
   *
   * @default 'none'
   */
  borderRadius: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
  /**
   * The padding on all sides of the box. The [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is supported, using flow-relative values in the order `block-start inline-end block-end inline-start`. For example, `'large'` applies large padding to all sides, while `'large none'` applies large padding to the block axis and no padding to the inline axis. A value of `'auto'` will use the default padding from the closest container that has had its padding removed. This property also accepts responsive values using container query syntax.
   *
   * @default 'none'
   */
  padding: ResponsiveBoxProps['padding'];
  /**
   * The padding on the block axis (top and bottom in horizontal writing modes). This property overrides the block-axis value set by the `padding` property. For example, `'large none'` applies large padding to the block-start and no padding to the block-end. This property also accepts responsive values using container query syntax.
   *
   * @default '' - meaning no override
   */
  paddingBlock: ResponsiveBoxProps['paddingBlock'];
  /**
   * The padding at the start of the block axis (top in horizontal writing modes). This property overrides the block-start value set by the `paddingBlock` property. It also accepts responsive values using container query syntax.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart: ResponsiveBoxProps['paddingBlockStart'];
  /**
   * The padding at the end of the block axis (bottom in horizontal writing modes). This property overrides the block-end value set by the `paddingBlock` property. It also accepts responsive values using container query syntax.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd: ResponsiveBoxProps['paddingBlockEnd'];
  /**
   * The padding on the inline axis (left and right in horizontal writing modes). This property overrides the inline-axis value set by the `padding` property. For example, `'large none'` applies large padding to the inline-start and no padding to the inline-end. This property also accepts responsive values using container query syntax.
   *
   * @default '' - meaning no override
   */
  paddingInline: ResponsiveBoxProps['paddingInline'];
  /**
   * The padding at the start of the inline axis (left in left-to-right writing modes). This property overrides the inline-start value set by the `paddingInline` property. It also accepts responsive values using container query syntax.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart: ResponsiveBoxProps['paddingInlineStart'];
  /**
   * The padding at the end of the inline axis (right in left-to-right writing modes). This property overrides the inline-end value set by the `paddingInline` property. It also accepts responsive values using container query syntax.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd: ResponsiveBoxProps['paddingInlineEnd'];
  /**
   * The outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component, which controls how it participates in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout). Use `'auto'` for the component's default behavior, or `'none'` to hide the component completely and remove it from the accessibility tree.
   *
   * @default 'auto'
   */
  display: ResponsiveBoxProps['display'];
  /**
   * The vertical size of the box in standard layouts (height in left-to-right or right-to-left writing modes).
   *
   * Block size adjusts based on the writing direction: in horizontal layouts, it controls the height;
   * in vertical layouts, it controls the width. This ensures consistent behavior across different text directions.
   *
   * Learn more about [block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
   *
   * @default 'auto'
   */
  blockSize: SizeUnitsOrAuto;
  /**
   * The [minimum block size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size) of the box (minimum height in horizontal writing modes).
   *
   * @default '0'
   */
  minBlockSize: SizeUnits;
  /**
   * The [maximum block size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size) of the box (maximum height in horizontal writing modes).
   *
   * @default 'none'
   */
  maxBlockSize: SizeUnitsOrNone;
  /**
   * The [inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size) of the box (width in horizontal writing modes).
   *
   * @default 'auto'
   */
  inlineSize: SizeUnitsOrAuto;
  /**
   * The [minimum inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size) of the box (minimum width in horizontal writing modes).
   *
   * @default '0'
   */
  minInlineSize: SizeUnits;
  /**
   * The [maximum inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size) of the box (maximum width in horizontal writing modes).
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
