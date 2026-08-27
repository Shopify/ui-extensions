/** VERSION: 2.19.1 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  PopoverProps$1,
  BoxProps$1,
  PreactCustomElement,
  RenderImpl,
  InteractionProps,
  MaybeAllValuesShorthandProperty,
  SizeUnitsOrAuto,
  SizeUnits,
  SizeUnitsOrNone,
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
 * A toggle event with a strongly-typed `currentTarget` property. Extends the `ToggleEvent` interface with type-safe access to the element that triggered the toggle.
 * @publicDocs
 */
export type CallbackToggleEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends ToggleEvent = ToggleEvent,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`. Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
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

export interface PopoverProps
  extends Required<
    Pick<
      PopoverProps$1,
      | 'blockSize'
      | 'inlineSize'
      | 'maxBlockSize'
      | 'maxInlineSize'
      | 'minBlockSize'
      | 'minInlineSize'
    >
  > {}

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

/**
 * Shared symbols for overlay control functionality.
 * These symbols are used by components that implement overlay behavior
 * (like Popover, Tooltip, Modal, etc.) to communicate with the overlay control system.
 */
/**
 * Symbol used to track the open or closed state of the overlay.
 */
declare const overlayHidden: unique symbol;
/**
 * Symbol used to track the element that opened the overlay. In some cases, like tooltips and popovers, the overlay is positioned against this element. In all cases, focus should be restored to this element when the overlay is closed.
 */
declare const overlayActivator: unique symbol;
declare const overlayHideFrameId: unique symbol;
/**
 * Represents the initialization object for creating a polyfill command event. Used for overlay control commands in environments that require polyfills.
 * @publicDocs
 */
export type PolyfillCommandEventInit = EventInit & {
  source: HTMLElement | null | undefined;
  command: PreactOverlayControlProps['command'];
  rootActivator?: HTMLElement | null;
};
/**
 * Represents a polyfill command event for overlay controls. Used in environments where native command events are not available.
 * @publicDocs
 */
export type PolyfillCommandEvent = Event & {
  source: PolyfillCommandEventInit['source'];
  command: PolyfillCommandEventInit['command'];
  /** Have to use `_s_shadowSource` because `source` is retargeted to the shadow host by browsers */
  _s_shadowSource: PolyfillCommandEventInit['source'];
  /** Root activator for nested overlays (e.g., menu button when modal opened from menu item) */
  _s_rootActivator?: HTMLElement | null;
};
declare global {
  interface GlobalEventHandlersEventMap {
    command: PolyfillCommandEvent;
  }
}

declare class PreactOverlayElement extends PolarisCustomElement {
  constructor(renderImpl: RenderImpl);
  /** @private */
  disconnectedCallback(): void;
  /** @private */
  [overlayHidden]: boolean;
  /** @private */
  [overlayActivator]: HTMLElement | null | undefined;
  /** @private */
  [overlayHideFrameId]?: number;
}

/**
 * Makes a type responsive by allowing it to be either the base value or a container query string. This enables conditional styling based on container dimensions.
 * @publicDocs
 */
export type MakeResponsive<T> = T | `@container${string}`;
/**
 * Makes a property's value potentially responsive.
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
   * Use `auto` to inherit padding from the nearest container with removed padding. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
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
   * Overrides the block value from `padding`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlock: ResponsiveBoxProps['paddingBlock'];
  /**
   * The block-start padding (top in horizontal writing modes).
   *
   * Overrides the block-start value from `paddingBlock`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart: ResponsiveBoxProps['paddingBlockStart'];
  /**
   * The block-end padding (bottom in horizontal writing modes).
   *
   * Overrides the block-end value from `paddingBlock`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
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
   * Overrides the inline value from `padding`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInline: ResponsiveBoxProps['paddingInline'];
  /**
   * The inline-start padding (left in LTR writing modes, right in RTL).
   *
   * Overrides the inline-start value from `paddingInline`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart: ResponsiveBoxProps['paddingInlineStart'];
  /**
   * The inline-end padding (right in LTR writing modes, left in RTL).
   *
   * Overrides the inline-end value from `paddingInline`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
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

declare class PreactPopoverElement<TTagName extends keyof HTMLElementTagNameMap>
  extends PreactOverlayElement
  implements PopoverProps
{
  constructor(renderImpl: RenderImpl);
  /**
   * The vertical size of the element in standard layouts (height in left-to-right or right-to-left writing modes).
   *
   * Block size adjusts based on the writing direction: in horizontal layouts, it controls the height; in vertical layouts, it controls the width. This ensures consistent behavior across different text directions.
   *
   * Learn more about the [block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
   *
   * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
   * - `auto`: Automatically sizes based on content and layout constraints.
   */
  accessor blockSize: BoxProps['blockSize'];
  /**
   * The minimum vertical size of the element in standard layouts (min-height in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming smaller than this size along the block axis.
   *
   * Learn more about the [min-block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).
   */
  accessor minBlockSize: BoxProps['minBlockSize'];
  /**
   * The maximum vertical size of the element in standard layouts (max-height in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming larger than this size along the block axis.
   *
   * Learn more about the [max-block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).
   */
  accessor maxBlockSize: BoxProps['maxBlockSize'];
  /**
   * The horizontal size of the element in standard layouts (width in left-to-right or right-to-left writing modes).
   *
   * Inline size adjusts based on the writing direction: in horizontal layouts, it controls the width; in vertical layouts, it controls the height. This ensures consistent behavior across different text directions.
   *
   * Learn more about the [inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   *
   * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
   * - `auto`: Automatically sizes based on content and layout constraints.
   */
  accessor inlineSize: BoxProps['inlineSize'];
  /**
   * The minimum horizontal size of the element in standard layouts (min-width in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming smaller than this size along the inline axis.
   *
   * Learn more about the [min-inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).
   */
  accessor minInlineSize: BoxProps['minInlineSize'];
  /**
   * The maximum horizontal size of the element in standard layouts (max-width in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming larger than this size along the inline axis.
   *
   * Learn more about the [max-inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).
   */
  accessor maxInlineSize: BoxProps['maxInlineSize'];
  /**
   * A callback fired immediately when the popover starts to show, before any entrance animation.
   * Use to prepare content or update positioning logic.
   */
  accessor onshow: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired immediately when the popover starts to hide, before any exit animation.
   * Use to perform cleanup or save state before the popover dismisses.
   */
  accessor onhide: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the popover has fully shown and any entrance animation completes.
   * Use to focus an element inside the popover or announce content to screen readers.
   */
  accessor onaftershow: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the popover has fully hidden and any exit animation completes.
   * Use to reset selections or update the trigger button state.
   */
  accessor onafterhide: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired when the popover visibility toggles. Use for unified open/close
   * handling when you don't need separate show and hide logic.
   */
  accessor ontoggle: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the popover visibility toggle completes and any animation finishes.
   * Use for post-transition updates.
   */
  accessor onaftertoggle: CallbackEventListener<TTagName> | null;
}

/**
 * Configure the following properties on the popover component.
 * @publicDocs
 */
declare class Popover
  extends PreactPopoverElement<typeof tagName>
  implements PopoverProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Popover;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: PopoverJSXProps & PreactBaseElementPropsWithChildren<Popover>;
    }
  }
}

declare const tagName = 's-popover';
export interface PopoverJSXProps
  extends Partial<PopoverProps>,
    Pick<PopoverProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the popover, which appears in an overlay positioned relative
   * to its trigger element. Typically contains menus, action lists, or supplementary information.
   */
  children?: ComponentChildren;
  /**
   * A callback fired immediately when the popover starts to hide, before any exit animation.
   * Use to perform cleanup or save state before the popover dismisses.
   */
  onHide?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * A callback fired immediately when the popover starts to show, before any entrance animation.
   * Use to prepare content or update positioning logic.
   */
  onShow?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * A callback fired after the popover has fully hidden and any exit animation completes.
   * Use to reset selections or update the trigger button state.
   */
  onAfterHide?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * A callback fired after the popover has fully shown and any entrance animation completes.
   * Use to focus an element inside the popover or announce content to screen readers.
   */
  onAfterShow?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * A callback fired when the popover visibility toggles. Use for unified open/close
   * handling when you don't need separate show and hide logic.
   */
  onToggle?: (event: CallbackToggleEvent<typeof tagName>) => void | null;
  /**
   * A callback fired after the popover visibility toggle completes and any animation finishes.
   * Use for post-transition updates.
   */
  onAfterToggle?: (event: CallbackToggleEvent<typeof tagName>) => void | null;
}

export {Popover};
export type {PopoverJSXProps};
