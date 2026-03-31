import {RemoteFragment, createRemoteComponent} from '@remote-ui/core';
import {GlobalProps, Tone} from '../shared';

/**
 * Props for the Banner component, which displays a prominent message to
 * the merchant. Banners communicate important information, status updates,
 * warnings, or errors, with optional primary and secondary actions.
 *
 * @publicDocs
 */
export interface BannerProps extends GlobalProps {
  /**
   * The main message displayed inside the banner. Use this to communicate
   * important information, status updates, or actionable messages to the
   * merchant.
   */
  title?: string;
  /**
   * The color and icon of the banner, conveying its semantic meaning.
   */
  tone?: Tone;
  /**
   * Whether the banner can be dismissed by the merchant. When `true`, then a
   * close button is rendered that allows the merchant to hide the banner.
   * @defaultValue false
   */
  dismissible?: boolean;
  /**
   * A callback fired when the merchant dismisses the banner by pressing the
   * close button. Use this to update your state and stop rendering the
   * banner. Only relevant when `dismissible` is `true`.
   */
  onDismiss?: () => void;

  /**
   * The primary action for the banner, rendered as a Button. Use this
   * for the main action related to the banner message, such as "Review"
   * or "Fix issue".
   */
  primaryAction?: RemoteFragment;

  /**
   * The secondary action for the banner, rendered as a Button. Use
   * this for an alternative or less prominent action, such as "Learn
   * more" or "Dismiss".
   */
  secondaryAction?: RemoteFragment;
}

/**
 * Banner displays a prominent message to the merchant with optional
 * actions. Use banners for important information, status updates,
 * warnings, or errors.
 */
export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
