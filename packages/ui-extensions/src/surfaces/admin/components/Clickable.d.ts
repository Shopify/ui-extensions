/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  BoxProps$1,
  ClickableProps$1,
  MaybeAllValuesShorthandProperty,
  SizeUnitsOrAuto,
  SizeUnits,
  SizeUnitsOrNone,
  InteractionProps,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';
import * as _shopify_admin_web_component_foundations from '@shopify/admin-web-component-foundations';

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
/**
 * Base props for Preact custom elements with children support. Extends PreactBaseElementProps with the ability to render child elements.
 * @publicDocs
 */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  /**
   * The child elements to be rendered within this component.
   */
  children?: preact.ComponentChildren;
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
 * Represents the base clickable props with all properties marked as required.
 * @publicDocs
 */
export type ClickableBaseProps = Required<
  Pick<
    ClickableProps$1,
    | 'command'
    | 'commandFor'
    | 'interestFor'
    | 'disabled'
    | 'download'
    | 'href'
    | 'lang'
    | 'loading'
    | 'overflow'
    | 'target'
    | 'type'
  >
>;
/**
 * Configure the following properties on the clickable component.
 */
export interface ClickableProps extends Required<BoxProps>, ClickableBaseProps {
  /**
   * Whether the component is in a loading state, which indicates to assistive technology that an action is in progress and prevents interaction.
   */
  loading: Required<ClickableProps$1>['loading'];
  /**
   * The language of the text content.
   *
   * Use this when the text is in a different language than the rest of the page, allowing assistive technologies
   * such as screen readers to invoke the correct pronunciation.
   *
   * The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   *
   * @default ''
   */
  lang: Required<ClickableProps$1>['lang'];
  /**
   * Whether the component is disabled, preventing clicks and focus. When disabled, the `click` event won't fire and click events from child elements stop propagating immediately. Interactive child elements can still receive focus and be interacted with. This doesn't apply visual styling by default. You should apply disabled styling as needed.
   */
  disabled: Required<ClickableProps$1>['disabled'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

export interface PreactOverlayControlProps
  extends Pick<InteractionProps, 'commandFor' | 'interestFor'> {
  /**
   * The action that [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this component is activated.
   *
   * - `--auto`: A default action for the target component.
   * - `--show`: Shows the target component.
   * - `--hide`: Hides the target component.
   * - `--toggle`: Toggles the visibility of the target component.
   *
   * @default '--auto'
   */
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
  /**
   * The component that [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this component is activated.
   */
  commandFor: Extract<InteractionProps['commandFor'], string>;
  /**
   * The ID of the component to show when users hover over or focus on this component. Use this to connect interactive components to popovers or tooltips that provide additional context or information.
   */
  interestFor: Extract<InteractionProps['interestFor'], string>;
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

declare const Clickable_base: (abstract new (
  renderImpl: _shopify_admin_web_component_foundations.RenderImpl,
) => BoxElement & PreactOverlayControlProps) &
  Pick<typeof BoxElement, 'prototype' | 'observedAttributes'>;
/**
 * Configure the following properties on the clickable component.
 * @publicDocs
 */
declare class Clickable extends Clickable_base implements ClickableProps {
  accessor disabled: ClickableProps['disabled'];
  accessor loading: ClickableProps['loading'];
  /**
   * The browsing context where the linked URL should be displayed.
   *
   * - `auto`: The target is automatically determined based on the origin of the URL.
   * - `_blank`: Opens the URL in a new window or tab.
   * - `_self`: Opens the URL in the same browsing context as the current one.
   * - `_parent`: Opens the URL in the parent browsing context of the current one. If there is no parent, behaves as `_self`.
   * - `_top`: Opens the URL in the topmost browsing context (the highest ancestor of the current one). If there is no ancestor, behaves as `_self`.
   */
  accessor target: ClickableProps['target'];
  /**
   * The URL to navigate to when clicked. The `click` event fires first, then navigation occurs. If `commandFor` is also set, the command executes instead of navigation.
   */
  accessor href: ClickableProps['href'];
  /**
   * Prompts the browser to download the linked URL rather than navigate to it. When set, the value specifies the suggested filename for the downloaded file.
   *
   * The filename suggestion is only respected for same-origin URLs, `blob:`, and `data:` schemes. Cross-origin URLs can still trigger downloads, but browsers might ignore the suggested filename.
   *
   * Learn more about the [download attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).
   */
  accessor download: ClickableProps['download'];
  accessor onclick: CallbackEventListener<typeof tagName> | null;
  accessor onblur: CallbackEventListener<typeof tagName> | null;
  accessor onfocus: CallbackEventListener<typeof tagName> | null;
  /**
   * The behavior of the button component.
   *
   * - `button`: Used to indicate the component acts as a button, meaning it has no default action.
   * - `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).
   * - `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.
   *
   * This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.
   */
  accessor type: ClickableProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Clickable;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ClickableJSXProps &
        PreactBaseElementPropsWithChildren<Clickable>;
    }
  }
}

declare const tagName = 's-clickable';
export interface ClickableJSXProps
  extends Partial<ClickableProps>,
    Pick<ClickableProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the clickable component, which makes any content interactive and clickable without the semantic meaning of a button or link.
   */
  children?: ComponentChildren;
  /**
   * A callback fired when the chip is clicked.
   */
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the chip receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the chip loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Clickable};
export type {ClickableJSXProps};
