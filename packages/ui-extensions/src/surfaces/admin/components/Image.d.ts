/** VERSION: 2.23.0 **/
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
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 * @publicDocs
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`. Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 * @publicDocs
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/**
 * Base props for Preact custom elements without children support. Includes common properties like key, ref, and slot for elements that don't accept child content.
 * @publicDocs
 */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /**
   * A unique identifier for this element, used by the virtual DOM to efficiently track and update elements in lists.
   * Essential for maintaining component state and optimizing re-renders when lists change.
   */
  key?: preact.Key;
  /**
   * A reference to access the underlying DOM element directly.
   * Typically created using `useRef()` to interact with the element imperatively or measure its properties.
   */
  ref?: preact.Ref<TClass>;
  /**
   * The named slot to which this element is assigned in the parent component's shadow DOM.
   *
   * Used for advanced component composition with web components.
   */
  slot?: Lowercase<string>;
}

export type ReactIntrinsicElementChildren<PreactProps extends object> =
  'children' extends keyof PreactProps
    ? {
        children?: ReactNode;
      }
    : Record<never, never>;
export type ReactIntrinsicElementProps<
  PreactProps extends object,
  ElementType,
> = Omit<PreactProps, 'children' | 'key' | 'ref' | 'slot'> &
  ReactIntrinsicElementChildren<PreactProps> &
  RefAttributes<ElementType> & {
    slot?: Lowercase<string>;
  };
export type ReactIntrinsicElements = {
  [Tag in Exclude<
    Extract<keyof preact$1.createElement.JSX.IntrinsicElements, `s-${string}`>,
    `s-test-${string}`
  >]: ReactIntrinsicElementProps<
    preact$1.createElement.JSX.IntrinsicElements[Tag],
    Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
  >;
};
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ReactIntrinsicElements {}
  }
}

/**
 * Makes a type responsive by allowing it to be either the base value or a container query string. This enables conditional styling based on container dimensions.
 * @publicDocs
 */
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
 * @publicDocs
 */
export type MakeResponsivePick<TType, TProperty extends keyof TType> = {
  [P in TProperty]: MakeResponsive<TType[P]>;
};

/**
 * Represents the box component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredBoxProps = Required<BoxProps$1>;
/**
 * Represents the subset of border radius values supported by the component.
 *
 * - `small-200`: Extra small radius for subtle rounding.
 * - `small-100`: Small radius for minimal corner rounding.
 * - `small`: Standard small radius.
 * - `base`: Medium radius for moderate corner rounding.
 * - `large`: Standard large radius for pronounced rounding.
 * - `large-100`: Large radius for more prominent corner rounding.
 * - `large-200`: Extra large radius for maximum rounding.
 * - `none`: No border radius (sharp corners).
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
 * Represents the subset of border style values supported by the box component.
 *
 * - `auto`: Default border style determined by the system.
 * - `none`: No border style (removes the border).
 * - `solid`: Continuous line border.
 * - `dashed`: Border made up of dashes.
 * @publicDocs
 */
export type BoxBorderStyles = Extract<
  RequiredBoxProps['borderStyle'],
  'none' | 'solid' | 'dashed' | 'auto'
>;
/**
 * Represents box props with responsive capabilities for layout properties.
 *
 * This enables conditional styling based on container queries.
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
   * The background color of the component.
   *
   * @default 'transparent'
   */
  background: Extract<
    RequiredBoxProps['background'],
    'transparent' | 'base' | 'subdued' | 'strong'
  >;
  /**
   * A border applied using shorthand syntax to specify width, color, and style in a single property.
   *
   * @default 'none'
   */
  border: RequiredBoxProps['border'];
  /**
   * The thickness of the border on all sides. When set, this overrides the width value specified in the `border` property.
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
   * The visual style of the border on all sides, such as solid, dashed, or dotted. When set, this overrides the style value specified in the `border` property.
   *
   * @default '' - meaning no override
   */
  borderStyle:
    | MaybeAllValuesShorthandProperty<BoxBorderStyles>
    | Extract<RequiredBoxProps['borderStyle'], ''>;
  /**
   * The color of the border using the design system's color scale. When set, this overrides the color value specified in the `border` property.
   *
   * @default '' - meaning no override
   */
  borderColor: Extract<
    RequiredBoxProps['borderColor'],
    'subdued' | 'base' | 'strong' | ''
  >;
  /**
   * The roundedness of the element's corners using the design system's radius scale.
   *
   * @default 'none'
   */
  borderRadius: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
  /**
   * The padding applied to all edges of the component.
   *
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) using flow-relative values:
   * - 1 value applies to all sides
   * - 2 values apply to block (top/bottom) and inline (left/right)
   * - 3 values apply to block-start (top), inline (left/right), and block-end (bottom)
   * - 4 values apply to block-start (top), inline-end (right), block-end (bottom), and inline-start (left)
   *
   * **Examples:** `base`, `large none`, `base large-100 base small`
   *
   * Use `auto` to inherit padding from the nearest container with removed padding. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default 'none'
   */
  padding: ResponsiveBoxProps['padding'];
  /**
   * The block-direction padding (top and bottom in horizontal writing modes).
   *
   * Accepts a single value for both sides or two space-separated values for block-start and block-end.
   *
   * **Example:** `large none` applies `large` to the top and `none` to the bottom.
   *
   * Overrides the block value from `padding`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlock: ResponsiveBoxProps['paddingBlock'];
  /**
   * The block-start padding (top in horizontal writing modes).
   *
   * Overrides the block-start value from `paddingBlock`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart: ResponsiveBoxProps['paddingBlockStart'];
  /**
   * The block-end padding (bottom in horizontal writing modes).
   *
   * Overrides the block-end value from `paddingBlock`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd: ResponsiveBoxProps['paddingBlockEnd'];
  /**
   * The inline-direction padding (left and right in horizontal writing modes).
   *
   * Accepts a single value for both sides or two space-separated values for inline-start and inline-end.
   *
   * **Example:** `large none` applies `large` to the left and `none` to the right.
   *
   * Overrides the inline value from `padding`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInline: ResponsiveBoxProps['paddingInline'];
  /**
   * The inline-start padding (left in LTR writing modes, right in RTL).
   *
   * Overrides the inline-start value from `paddingInline`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart: ResponsiveBoxProps['paddingInlineStart'];
  /**
   * The inline-end padding (right in LTR writing modes, left in RTL).
   *
   * Overrides the inline-end value from `paddingInline`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd: ResponsiveBoxProps['paddingInlineEnd'];
  /**
   * The outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
   *
   * - `auto` the component's initial value. The actual value depends on the component and context.
   * - `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
   *
   * @default 'auto'
   */
  display: ResponsiveBoxProps['display'];
  /**
   * The vertical size of the element in standard layouts (height in left-to-right or right-to-left writing modes).
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
   * The minimum height in horizontal writing modes, or minimum width in vertical writing modes.
   * Prevents the element from shrinking below this size.
   *
   * Learn more about [min-block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).
   *
   * @default '0'
   */
  minBlockSize: SizeUnits;
  /**
   * The maximum height in horizontal writing modes, or maximum width in vertical writing modes.
   * Prevents the element from growing beyond this size.
   *
   * Learn more about [max-block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).
   *
   * @default 'none'
   */
  maxBlockSize: SizeUnitsOrNone;
  /**
   * The width in horizontal writing modes, or height in vertical writing modes.
   * Use this for flow-relative sizing that adapts to text direction. Learn more about [inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   *
   * @default 'auto'
   */
  inlineSize: SizeUnitsOrAuto;
  /**
   * The minimum width in horizontal writing modes, or minimum height in vertical writing modes.
   * Prevents the element from shrinking below this size.
   *
   * Learn more about [min-inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).
   *
   * @default '0'
   */
  minInlineSize: SizeUnits;
  /**
   * The maximum width in horizontal writing modes, or maximum height in vertical writing modes.
   * Prevents the element from growing beyond this size.
   *
   * Learn more about [max-inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).
   *
   * @default 'none'
   */
  maxInlineSize: SizeUnitsOrNone;
}

/**
 * Configure the following properties on the image component.
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
   * The loading strategy for the image.
   *
   * - `eager`: Immediately loads the image, irrespective of its position within the visible viewport.
   * - `lazy`: Delays loading the image until it approaches a specified distance from the viewport.
   *
   * Learn more about the [loading attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading).
   *
   * @default 'eager'
   */
  loading: Required<ImageProps$1>['loading'];
  /**
   * The semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * - `none`: Completely hides the element and its content from assistive technologies
   * - `presentation`: Removes semantic meaning, making the image purely decorative and ignored by screen readers.
   * - `img`: Identifies the element as an image that conveys meaningful information to users.
   *
   * @default 'img'
   *
   * @implementation The `img` role doesn't need to be applied if
   * the host applies it for you; for example, an HTML host rendering
   * an `<img>` element should not apply the `img` role.
   */
  accessibilityRole: Required<ImageProps$1>['accessibilityRole'];
  /**
   * The displayed inline width of the image.
   *
   * - `fill`: the image will take up 100% of the available inline size.
   * - `auto`: the image will be displayed at its natural size.
   *
   * Learn more about the [width attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width).
   *
   * @default 'fill'
   */
  inlineSize: Required<ImageProps$1>['inlineSize'];
  /**
   * The aspect ratio of the image.
   *
   * The rendering of the image will depend on the `inlineSize` value:
   *
   * - `inlineSize="fill"`: the aspect ratio will be respected and the image will take the necessary space.
   * - `inlineSize="auto"`: the image will not render until it has loaded and the aspect ratio will be ignored.
   *
   * For example, if the value is set as `50 / 100`, the getter returns `50 / 100`.
   * If the value is set as `0.5`, the getter returns `0.5 / 1`.
   *
   * Learn more about the [aspect-ratio property](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio).
   *
   * @default '1/1'
   */
  aspectRatio: Required<ImageProps$1>['aspectRatio'];
  /**
   * The image resizing behavior to fit within its container.
   *
   * - `contain`: Scales the image to fit within the container while maintaining its aspect ratio. The entire image is visible, but might leave empty space.
   * - `cover`: Scales the image to fill the entire container while maintaining its aspect ratio. The image might be cropped to fit.
   *
   * The image is always positioned in the center of the container.
   *
   * Learn more about the [object-fit property](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
   *
   * @default 'contain'
   */
  objectFit: Required<ImageProps$1>['objectFit'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

/**
 * Configure the following properties on the image component.
 * @publicDocs
 */
declare class Image extends PolarisCustomElement implements ImageProps {
  /**
   * The image source (either a remote URL or a local file resource).
   *
   * When the image is loading or no `src` is provided, a placeholder is rendered.
   */
  accessor src: ImageProps['src'];
  /**
   * A set of image sources and their width or pixel density descriptors. This overrides the `src` property.
   *
   * Learn more about the [srcset attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset).
   */
  accessor srcSet: ImageProps['srcSet'];
  /**
   * A set of media conditions and their corresponding sizes.
   *
   * Learn more about the [sizes attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes).
   */
  accessor sizes: ImageProps['sizes'];
  /**
   * Alternative text that describes the image for accessibility.
   *
   * Provides a text description of the image for users with assistive technology and serves as a fallback when the image fails to load. A well-written description enables people with visual impairments to understand non-text content.
   *
   * When a screen reader encounters an image, it reads this description aloud. When an image fails to load, this text displays on screen, helping all users understand what content was intended.
   *
   * Learn more about [writing effective alt text](https://www.shopify.com/ca/blog/image-alt-text#4) and the [alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt).
   */
  accessor alt: ImageProps['alt'];
  accessor aspectRatio: ImageProps['aspectRatio'];
  accessor objectFit: ImageProps['objectFit'];
  accessor loading: ImageProps['loading'];
  accessor accessibilityRole: ImageProps['accessibilityRole'];
  accessor inlineSize: ImageProps['inlineSize'];
  /**
   * A border applied around the image using shorthand syntax to specify width, color, and style in a single property.
   */
  accessor border: ImageProps['border'];
  /**
   * The thickness of the border around the image. When set, this overrides the width value specified in the `border` property.
   */
  accessor borderWidth: ImageProps['borderWidth'];
  /**
   * The visual style of the border around the image, such as solid, dashed, or dotted. When set, this overrides the style value specified in the `border` property.
   */
  accessor borderStyle: ImageProps['borderStyle'];
  /**
   * The color of the border around the image using the design system's color scale. When set, this overrides the color value specified in the `border` property.
   */
  accessor borderColor: ImageProps['borderColor'];
  /**
   * The roundedness of the image's corners using the design system's radius scale.
   */
  accessor borderRadius: ImageProps['borderRadius'];
  accessor onload: CallbackEventListener<typeof tagName> | null;
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
export interface ImageJSXProps
  extends Partial<ImageProps>,
    Pick<ImageProps$1, 'id'> {
  /**
   * A callback fired when the image fails to load.
   */
  onError?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the image loads successfully.
   */
  onLoad?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Image};
export type {ImageJSXProps};
