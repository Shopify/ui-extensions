/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChild$1,
  Key,
  Ref,
  ComponentChildren,
} from './components-shared.d.ts';

type ComponentChild = ComponentChild$1;
/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren;
}

declare const tagName = 's-screen';
export interface ScreenSlotProps {
  /**
   * Displays a secondary action button on the screen.
   */
  secondaryActions?: ComponentChild;
}
export interface ScreenEventProps {
  /**
   * Triggered when the screen is navigated to.
   */
  onNavigate?: () => void;
  /**
   * Triggered when the user navigates back from this screen. Runs after screen is unmounted.
   */
  onNavigateBack?: () => void;
  /**
   * A callback that gets triggered when the navigation event completes and the screen receives the parameters.
   */
  onReceiveParams?: (params: any) => void;
}
export interface ScreenJSXProps extends ScreenSlotProps, ScreenEventProps {
  /**
   * Used to identify this screen as a destination in the navigation stack.
   */
  name: string;
  /**
   * The title of the screen which will be displayed on the UI.
   */
  title: string;
  /**
   * Displays a loading indicator when `true`.
   * Set this to `true` when performing an asynchronous task, and then to false when the data becomes available to the UI.
   */
  isLoading?: boolean;
  /**
   * Dictates how the `Screen` will be presented when navigated to.
   */
  presentation?: ScreenPresentationProps;
  children?: React.ReactNode;
}
/** Represents the presentation of a screen in the navigation stack.
 * @property `sheet` displays the screen from the bottom on `navigate` when `true`.
 */
export interface ScreenPresentationProps {
  /**
   * Displays the screen from the bottom on `navigate` when `true`.
   */
  sheet?: boolean;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ScreenJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<ScreenJSXProps>;
    }
  }
}

export {tagName};
export type {
  ScreenEventProps,
  ScreenJSXProps,
  ScreenPresentationProps,
  ScreenSlotProps,
};
