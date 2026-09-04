/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  ClickableChipProps$1,
  InteractionProps,
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
 * Configure the following properties on the clickable chip component.
 */
export interface ClickableChipProps
  extends Required<
    Pick<
      ClickableChipProps$1,
      | 'color'
      | 'accessibilityLabel'
      | 'removable'
      | 'hidden'
      | 'href'
      | 'disabled'
      | 'command'
      | 'commandFor'
      | 'interestFor'
    >
  > {
  /**
   * Whether the chip is hidden from view. When using controlled component pattern with `removable` chips, update this property when the `remove` event fires. For non-removable chips, manually toggle this property to show or hide the chip.
   *
   * @default false
   */
  hidden: Required<ClickableChipProps$1>['hidden'];
  /**
   * Whether the chip is disabled, preventing any user interaction.
   *
   * @default false
   */
  disabled: Required<ClickableChipProps$1>['disabled'];
  /**
   * The URL to navigate to when clicked. The `click` event fires first, then navigation occurs. If `commandFor` is also set, the command executes instead of navigation.
   */
  href: Required<ClickableChipProps$1>['href'];
  /**
   * Whether the chip displays a remove button for dismissal. When clicked, the `remove` callback fires.
   *
   * @default false
   */
  removable: Required<ClickableChipProps$1>['removable'];
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

declare const ClickableChipBase_base: (abstract new (
  renderImpl: Omit<RenderImpl, 'globalShadowCSS'>,
) => PolarisCustomElement & PreactOverlayControlProps) &
  Pick<typeof PolarisCustomElement, 'prototype' | 'observedAttributes'>;
declare abstract class ClickableChipBase<
    TTagName extends keyof HTMLElementTagNameMap,
  >
  extends ClickableChipBase_base
  implements
    Pick<
      ClickableChipProps,
      'accessibilityLabel' | 'removable' | 'hidden' | 'disabled' | 'href'
    >
{
  accessor accessibilityLabel: ClickableChipProps['accessibilityLabel'];
  accessor removable: ClickableChipProps['removable'];
  accessor hidden: ClickableChipProps['hidden'];
  accessor disabled: ClickableChipProps['disabled'];
  accessor href: ClickableChipProps['href'];
  accessor onclick: CallbackEventListener<TTagName> | null;
  accessor onremove: CallbackEventListener<TTagName> | null;
  accessor onafterhide: CallbackEventListener<TTagName> | null;
  abstract accessor color: string;
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * Configure the following properties on the clickable chip component.
 * @publicDocs
 */
declare class ClickableChip
  extends ClickableChipBase<typeof tagName>
  implements ClickableChipProps
{
  /**
   * The color emphasis level that controls visual intensity.
   */
  accessor color: ClickableChipProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ClickableChip;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<ClickableChipJSXProps, 'graphic'> &
        PreactBaseElementPropsWithChildren<ClickableChip>;
    }
  }
}

declare const tagName = 's-clickable-chip';
export interface ClickableChipJSXProps
  extends Partial<ClickableChipProps>,
    Pick<ClickableChipProps$1, 'id' | 'children'> {
  /**
   * The text label displayed within the chip, which represents an interactive filter, tag, or selectable item.
   */
  children?: ComponentChildren;
  /**
   * An optional icon to display at the start of the chip. Accepts only icon components.
   */
  graphic?: ComponentChildren;
  /**
   * A callback fired when the chip is clicked.
   */
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the user clicks the remove button on the chip.
   */
  onRemove?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the chip is completely hidden, after any hide animations have completed.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {ClickableChip};
export type {ClickableChipJSXProps};
