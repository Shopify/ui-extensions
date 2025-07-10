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

export type BannerVariant = 'information' | 'confirmation' | 'alert' | 'error';

/**
 * A banner informs merchants about important changes or persistent conditions.
 */
export interface BannerProps extends GlobalProps {
  /**
   * The title text displayed in the banner.
   */
  title: string;
  /**
   * The visual style variant of the banner.
   */
  variant: BannerVariant;
  /**
   * The action button text.
   */
  action?: string;
  /**
   * Whether the banner is visible.
   */
  visible: boolean;
  /**
   * Callback executed when the action button is pressed.
   */
  onAction?: () => void;
  /**
   * Callback executed when the banner is dismissed.
   */
  onDismiss?: () => void;
}

declare const Banner_base: (abstract new (args_0: any) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Banner extends Banner_base implements BannerProps {
  accessor title: BannerProps['title'];
  accessor variant: BannerProps['variant'];
  accessor action: BannerProps['action'];
  accessor visible: BannerProps['visible'];
  accessor onaction: CallbackEventListener<typeof tagName> | null;
  accessor ondismiss: CallbackEventListener<typeof tagName> | null;
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Banner;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BannerJSXProps & PreactBaseElementPropsWithChildren<Banner>;
    }
  }
}

declare const tagName = 's-banner';

export interface BannerJSXProps
  extends Partial<Omit<BannerProps, 'title' | 'variant' | 'visible'>> {
  // Required props
  title: string;
  variant: BannerVariant;
  visible: boolean;
  onAction?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onDismiss?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Banner};
export type {BannerJSXProps};
