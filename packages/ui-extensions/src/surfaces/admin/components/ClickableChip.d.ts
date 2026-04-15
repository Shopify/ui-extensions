/** VERSION: 1.64.0 **/
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
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

/**
 * The properties for the clickable chip component. These properties define an interactive chip that can be clicked or removed.
 * @publicDocs
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
  > {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

export interface PreactOverlayControlProps
  extends Pick<InteractionProps, 'commandFor' | 'interestFor'> {
  /**
   * Sets the action the [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this clickable is activated.
   *
   * See the documentation of particular components for the actions they support.
   *
   * - `--auto`: a default action for the target component.
   * - `--show`: shows the target component.
   * - `--hide`: hides the target component.
   * - `--toggle`: toggles the target component.
   *
   * @default '--auto'
   */
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
  /**
   * Sets the element the [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this clickable is activated.
   */
  commandFor: Extract<InteractionProps['commandFor'], string>;
  /**
   * Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.
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
  /**
   * A text description of the chip for screen readers.
   */
  accessor accessibilityLabel: ClickableChipProps['accessibilityLabel'];
  /**
   * Whether the chip can be removed by the user.
   */
  accessor removable: ClickableChipProps['removable'];
  /**
   * Whether the chip is hidden from view.
   */
  accessor hidden: ClickableChipProps['hidden'];
  /**
   * Whether the chip is disabled and can't be clicked.
   */
  accessor disabled: ClickableChipProps['disabled'];
  /**
   * The URL to navigate to when the chip is clicked.
   */
  accessor href: ClickableChipProps['href'];
  /**
   * A callback that's fired when the chip is clicked.
   */
  accessor onclick: CallbackEventListener<TTagName> | null;
  /**
   * A callback that's fired when the chip is removed.
   */
  accessor onremove: CallbackEventListener<TTagName> | null;
  /**
   * A callback that's fired after the chip finishes hiding.
   */
  accessor onafterhide: CallbackEventListener<TTagName> | null;
  abstract accessor color: string;
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * A custom element for displaying interactive chips that can be clicked or removed.
 */
declare class ClickableChip
  extends ClickableChipBase<typeof tagName>
  implements ClickableChipProps
{
  /**
   * The color of the chip.
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
/**
 * The JSX properties for the clickable chip component. These properties define how a clickable chip is rendered in Preact or JSX.
 * @publicDocs
 */
export interface ClickableChipJSXProps
  extends Partial<ClickableChipProps>,
    Pick<ClickableChipProps$1, 'id' | 'children'> {
  /**
   * The content of the chip.
   */
  children?: ComponentChildren;
  /**
   * An optional icon to display at the start of the chip. Accepts only Icon components.
   */
  graphic?: ComponentChildren;
  /**
   * A callback that's fired when the chip is clicked.
   */
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's fired when the chip is removed.
   */
  onRemove?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's fired after the chip finishes hiding.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {ClickableChip};
export type {ClickableChipJSXProps};
