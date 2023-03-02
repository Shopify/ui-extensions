import {createRemoteComponent} from '@remote-ui/core';

export type BannerStatus = 'critical' | 'info' | 'success' | 'warning';

export interface BannerAction {
  /** Callback when the Banner action button is pressed. */
  onAction: () => void;

  /** Button label text. */
  content: string;
}

export interface BannerProps {
  /** Button to display at bottom of banner. */
  action?: BannerAction;

  /** Callback fired when banner is dismissed. */
  onDismiss?: () => void;

  /** Visual treatment of the banner based on message purpose. */
  status?: BannerStatus;

  /** Title of the banner. */
  title?: string;
}

/**
 * Banners inform merchants about important changes or persistent conditions. Use this component if you need to communicate to merchants in a prominent way.
 *
 * [Learn more about best practices and guidelines on using Banners](https://polaris.shopify.com/components/feedback-indicators/banner#best-practices).
 */
export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
