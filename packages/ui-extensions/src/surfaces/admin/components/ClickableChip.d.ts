/** VERSION: 1.38.0 **/
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
import * as _shopify_admin_web_component_foundations from '@shopify/admin-web-component-foundations';

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
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

declare const ClickableChip_base: (abstract new (
  renderImpl: Omit<
    _shopify_admin_web_component_foundations.RenderImpl,
    'globalShadowCSS'
  >,
) => PolarisCustomElement & PreactOverlayControlProps) &
  Pick<typeof PolarisCustomElement, 'prototype' | 'observedAttributes'>;
declare class ClickableChip
  extends ClickableChip_base
  implements ClickableChipProps
{
  accessor color: ClickableChipProps['color'];
  accessor accessibilityLabel: ClickableChipProps['accessibilityLabel'];
  accessor removable: ClickableChipProps['removable'];
  accessor hidden: ClickableChipProps['hidden'];
  accessor disabled: ClickableChipProps['disabled'];
  accessor href: ClickableChipProps['href'];
  accessor onclick: CallbackEventListener<typeof tagName> | null;
  accessor onremove: CallbackEventListener<typeof tagName> | null;
  accessor onafterhide: CallbackEventListener<typeof tagName> | null;
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
   * The content of the clickable chip.
   */
  children?: ComponentChildren;
  /**
   * The graphic to display in the clickable chip.
   *
   * Only accepts `Icon` components.
   */
  graphic?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onRemove?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onAfterHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {ClickableChip};
export type {ClickableChipJSXProps};
