/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {Key, Ref, ComponentChild} from './components-shared.d.ts';

type ComponentChildren = any;
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
export interface ScreenJSXProps {
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
  /**
   * Displays a secondary action button on the screen.
   */
  secondaryActions?: ComponentChild;
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
export type {ScreenJSXProps, ScreenPresentationProps};
