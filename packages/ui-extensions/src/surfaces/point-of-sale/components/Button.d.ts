/** VERSION: 0.0.0 **/
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactCustomElement,
  CallbackEventListener,
  CallbackEvent,
  PreactBaseElementPropsWithChildren,
  GlobalProps,
} from './shared';

export type ButtonType = 'primary' | 'secondary' | 'basic' | 'destructive';

export interface ButtonProps extends GlobalProps {
  /**
   * The text set on the `Button`.
   *
   * Note: When using a Button for menu-item targets, the title will be ignored. The text on the menu-item will be the extension's description.
   */
  title?: string;
  /**
   * The type of `Button` to render. Determines the appearance of the button.
   */
  type?: ButtonType;
  /**
   * The callback that is executed when the user taps the button.
   */
  onPress?: () => void;
  /**
   * Sets whether the `Button` can be tapped.
   */
  isDisabled?: boolean;
  /**
   * Sets whether the `Button` is displaying an animated loading state.
   */
  isLoading?: boolean;
}

declare const Button_base: (abstract new (args_0: any) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Button extends Button_base implements ButtonProps {
  accessor title: string;
  accessor type: ButtonType;
  accessor isDisabled: boolean;
  accessor isLoading: boolean;
  accessor onpress: CallbackEventListener<typeof tagName> | null;
  accessor id?: string;
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

export interface ButtonJSXProps extends Partial<ButtonProps> {
  /** Event handler when pressed - maps to onPress prop */
  onPress?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Button};
export type {ButtonJSXProps};
