/** VERSION: 1.42.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  IconProps$1,
  PressButtonProps$1,
  IconType,
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

export type PressButtonBaseProps = Required<
  Pick<
    PressButtonProps$1,
    | 'accessibilityLabel'
    | 'disabled'
    | 'icon'
    | 'inlineSize'
    | 'lang'
    | 'loading'
    | 'tone'
    | 'variant'
    | 'pressed'
    | 'defaultPressed'
  >
>;
export interface PressButtonProps extends PressButtonBaseProps {
  tone: Extract<PressButtonProps$1['tone'], 'neutral'>;
  icon: IconProps['type'];
  variant: Extract<PressButtonProps$1['variant'], 'secondary' | 'tertiary'>;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare class PressButton
  extends PolarisCustomElement
  implements PressButtonProps
{
  accessor disabled: PressButtonProps['disabled'];
  accessor icon: PressButtonProps['icon'];
  accessor loading: PressButtonProps['loading'];
  accessor variant: PressButtonProps['variant'];
  accessor tone: PressButtonProps['tone'];
  accessor inlineSize: PressButtonProps['inlineSize'];
  get pressed(): boolean;
  set pressed(pressed: PressButtonProps['pressed']);
  accessor defaultPressed: PressButtonProps['defaultPressed'];
  accessor onclick: CallbackEventListener<typeof tagName> | null;
  accessor onblur: CallbackEventListener<typeof tagName> | null;
  accessor onfocus: CallbackEventListener<typeof tagName> | null;
  accessor accessibilityLabel: PressButtonProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: PressButton;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: PressButtonJSXProps &
        PreactBaseElementPropsWithChildren<PressButton>;
    }
  }
}

declare const tagName = 's-press-button';
export interface PressButtonJSXProps
  extends Partial<PressButtonProps>,
    Pick<PressButtonProps$1, 'children'> {
  /**
   * The content of the PressButton.
   */
  children?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {PressButton};
export type {PressButtonJSXProps};
