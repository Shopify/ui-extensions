/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  IconProps$1,
  ButtonProps$1,
  IconType,
  InteractionProps,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

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

export interface IconProps
  extends Required<
    Pick<IconProps$1, 'type' | 'tone' | 'color' | 'size' | 'interestFor'>
  > {
  /**
   * Specifies the type of icon that will be displayed.
   */
  type: '' | IconType | 'empty';
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

export type ButtonOnlyProps = Extract<
  ButtonProps$1,
  {
    type?: unknown;
  }
>;
export type ButtonBaseProps = Required<
  Pick<
    ButtonOnlyProps,
    | 'accessibilityLabel'
    | 'disabled'
    | 'command'
    | 'commandFor'
    | 'icon'
    | 'interestFor'
    | 'lang'
    | 'loading'
    | 'type'
    | 'tone'
    | 'variant'
    | 'target'
    | 'href'
    | 'download'
    | 'inlineSize'
  >
>;
export interface ButtonProps extends ButtonBaseProps {
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  icon: IconProps['type'];
}

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

declare const ButtonBase_base: (abstract new (
  renderImpl: Omit<RenderImpl, 'globalShadowCSS'>,
) => PolarisCustomElement & PreactOverlayControlProps) &
  Pick<typeof PolarisCustomElement, 'prototype' | 'observedAttributes'>;
declare abstract class ButtonBase<TTagName extends keyof HTMLElementTagNameMap>
  extends ButtonBase_base
  implements
    Pick<
      ButtonProps,
      | 'disabled'
      | 'loading'
      | 'target'
      | 'href'
      | 'download'
      | 'type'
      | 'accessibilityLabel'
      | 'inlineSize'
    >
{
  accessor disabled: ButtonProps['disabled'];
  accessor loading: ButtonProps['loading'];
  accessor target: ButtonProps['target'];
  accessor href: ButtonProps['href'];
  accessor download: ButtonProps['download'];
  accessor type: ButtonProps['type'];
  accessor accessibilityLabel: ButtonProps['accessibilityLabel'];
  accessor inlineSize: ButtonProps['inlineSize'];
  accessor onclick: CallbackEventListener<TTagName> | null;
  accessor onblur: CallbackEventListener<TTagName> | null;
  accessor onfocus: CallbackEventListener<TTagName> | null;
  abstract icon: string;
  abstract variant: string;
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

declare class Button extends ButtonBase<typeof tagName> implements ButtonProps {
  accessor icon: ButtonProps['icon'];
  accessor variant: ButtonProps['variant'];
  accessor tone: ButtonProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ButtonJSXProps & PreactBaseElementPropsWithChildren<Button>;
    }
  }
}

declare const tagName = 's-button';
export interface ButtonJSXProps
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'id' | 'children'> {
  /**
   * The content of the Button.
   */
  children?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Button};
export type {ButtonJSXProps};
