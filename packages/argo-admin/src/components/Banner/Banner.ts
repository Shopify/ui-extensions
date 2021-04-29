import {createRemoteComponent} from '@remote-ui/core';

export type BannerStatus = 'success' | 'info' | 'warning' | 'critical';

export interface BannerAction {
  /** Callback when the Banner action button is pressed. */
  onAction: () => void;

  /** Button label text. */
  content: string;
}

export interface BannerProps {
  /** Button to display at bottom of banner. */
  action?: BannerAction;

  /** Colour of the banner. */
  status?: BannerStatus;

  /** Title of the banner. */
  title?: string;

  /** Callback when banner is dismissed. */
  onDismiss: () => void;
}

/**
 * Banners inform merchants about important changes or persistent conditions. Use this component if you need to communicate to merchants in a prominent way.
 *
 * [Learn more about best practices and guidelines on using Banners](https://polaris.shopify.com/components/feedback-indicators/banner#section-best-practices).
 */
export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
