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
 * A component used to navigate between different screens.
 */
export interface NavigatorProps extends GlobalProps {
  /**
   * The name of the screen to show initially.
   */
  initialScreenName?: string;
}

declare const Navigator_base: (abstract new (
  args_0: any,
) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Navigator extends Navigator_base implements NavigatorProps {
  accessor initialScreenName: NavigatorProps['initialScreenName'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Navigator;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: NavigatorJSXProps &
        PreactBaseElementPropsWithChildren<Navigator>;
    }
  }
}

declare const tagName = 's-navigator';

export interface NavigatorJSXProps extends Partial<NavigatorProps> {}

export {Navigator};
export type {NavigatorJSXProps};
