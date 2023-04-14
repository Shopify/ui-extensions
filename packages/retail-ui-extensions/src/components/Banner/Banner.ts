import {createRemoteComponent} from '@remote-ui/core';

export type BannerVariant = 'confirmation' | 'alert' | 'error' | 'information';

export interface BannerProps {
  /**
   * The title of the banner.
   */
  title: string;

  /**
   * Banners have multiple variants that can be used to
   * change the color and style of the banner.
   */
  variant: BannerVariant;

  /**
   * @defaultValue 'dismiss'
   */
  action?: string;

  /**
   * Dismisses the banner by default.
   */
  onPress?: () => void;

  /**
   * Use this parameter to hide the action button.
   */
  hideAction?: boolean;

  /**
   * Whether or not the banner is visible.
   * @defaultValue true
   */
  visible: boolean;
}

export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
