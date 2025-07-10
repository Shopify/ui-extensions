/** VERSION: 0.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
  GlobalProps,
} from './shared';

/**
 * A scrollable view component that can contain other components.
 */
export interface ScrollViewProps extends GlobalProps {
  /**
   * Whether the scroll view should scroll horizontally.
   */
  horizontal?: boolean;
  /**
   * Whether to show the scroll indicator.
   */
  showsScrollIndicator?: boolean;
}

declare class ScrollView
  extends PreactCustomElement
  implements ScrollViewProps
{
  accessor horizontal: ScrollViewProps['horizontal'];
  accessor showsScrollIndicator: ScrollViewProps['showsScrollIndicator'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ScrollView;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ScrollViewJSXProps &
        PreactBaseElementPropsWithChildren<ScrollView>;
    }
  }
}

declare const tagName = 's-scroll-view';

export interface ScrollViewJSXProps extends Partial<ScrollViewProps> {}

export {ScrollView};
export type {ScrollViewJSXProps};
