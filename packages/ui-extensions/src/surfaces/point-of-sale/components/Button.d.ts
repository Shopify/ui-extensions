/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  CallbackEvent,
  CallbackEventListener,
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
} from './shared.d.ts';

export type ButtonType = 'primary' | 'secondary' | 'basic' | 'destructive';

/**
 * @property `title` the text set on the `Button`.
 * @property `type` the type of `Button` to render. Determines the appearance of the button.
 * @property `onPress` the callback that is executed when the user taps the button.
 * @property `isDisabled` sets whether the `Button` can be tapped.
 * @property `isLoading` sets whether the `Button` is displaying an animated loading state.
 */
export interface ButtonProps {
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

declare class Button extends PreactCustomElement implements ButtonProps {
  accessor title: ButtonProps['title'];
  accessor type: ButtonProps['type'];
  accessor isDisabled: ButtonProps['isDisabled'];
  accessor isLoading: ButtonProps['isLoading'];
  accessor onpress: CallbackEventListener<typeof tagName> | null;
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
  onPress?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  id?: string;
}

export {Button};
export type {ButtonJSXProps};
