/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
} from './shared.d.ts';

/**
 * A component used to navigate between different screens.
 */
export interface NavigatorProps {
  /**
   * The name of the screen to show initially.
   */
  initialScreenName?: string;
}

declare class Navigator extends PreactCustomElement implements NavigatorProps {
  accessor initialScreenName: NavigatorProps['initialScreenName'];
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

export interface NavigatorJSXProps extends Partial<NavigatorProps> {
  id?: string;
}

export {Navigator};
export type {NavigatorJSXProps};
