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

// Common icon names used in POS
export type IconName =
  | 'call'
  | 'card-reader'
  | 'circle-cancel'
  | 'orders'
  | 'star'
  | 'cart'
  | 'customer'
  | 'search'
  | 'settings'
  | 'check'
  | 'close'
  | 'plus'
  | 'minus'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-down';

export type IconSize = 'minor' | 'major' | 'spot' | 'caption' | 'badge';

/**
 * A component that renders an icon from the POS asset catalog.
 */
export interface IconProps extends GlobalProps {
  /**
   * The name of the icon to render.
   */
  name: IconName;
  /**
   * The size of the icon.
   * @default 'major'
   */
  size?: IconSize;
}

declare const Icon_base: (abstract new (args_0: any) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Icon extends Icon_base implements IconProps {
  accessor name: IconProps['name'];
  accessor size: IconProps['size'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Icon;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IconJSXProps & PreactBaseElementPropsWithChildren<Icon>;
    }
  }
}

declare const tagName = 's-icon';

export interface IconJSXProps extends Partial<Omit<IconProps, 'name'>> {
  // name is required
  name: IconName;
}

export {Icon};
export type {IconJSXProps};
