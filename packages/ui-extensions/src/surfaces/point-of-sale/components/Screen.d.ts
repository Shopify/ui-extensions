/** VERSION: 0.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  CallbackEvent,
  CallbackEventListener,
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
  GlobalProps,
} from './shared';

export interface ScreenPresentationProps extends GlobalProps {
  /**
   * Whether the screen should be presented as a sheet.
   */
  sheet?: boolean;
}

export interface SecondaryActionProps extends GlobalProps {
  /**
   * The text displayed on the secondary action button.
   */
  title: string;
  /**
   * Whether the secondary action is enabled.
   */
  isEnabled?: boolean;
  /**
   * The callback executed when the secondary action is pressed.
   */
  onPress?: () => void;
}

/**
 * A component used in the root of a modal extension to define a screen.
 */
export interface ScreenProps extends GlobalProps {
  /**
   * The unique name identifier for the screen.
   */
  name: string;
  /**
   * The title displayed in the navigation bar.
   */
  title: string;
  /**
   * Presentation options for the screen.
   */
  presentation?: ScreenPresentationProps;
  /**
   * Secondary action configuration for the screen.
   */
  secondaryAction?: SecondaryActionProps;
  /**
   * Callback executed when the back button is pressed.
   */
  overrideNavigateBack?: () => void;
}

declare const Screen_base: (abstract new (args_0: any) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Screen extends Screen_base implements ScreenProps {
  accessor name: ScreenProps['name'];
  accessor title: ScreenProps['title'];
  accessor presentation: ScreenProps['presentation'];
  accessor secondaryAction: ScreenProps['secondaryAction'];
  accessor overrideNavigateBack: CallbackEventListener<typeof tagName> | null;
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Screen;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ScreenJSXProps & PreactBaseElementPropsWithChildren<Screen>;
    }
  }
}

declare const tagName = 's-screen';

export interface ScreenJSXProps
  extends Partial<Omit<ScreenProps, 'name' | 'title'>> {
  // name and title are required
  name: string;
  title: string;
  overrideNavigateBack?:
    | ((event: CallbackEvent<typeof tagName>) => void)
    | null;
}

export {Screen};
export type {ScreenJSXProps};
