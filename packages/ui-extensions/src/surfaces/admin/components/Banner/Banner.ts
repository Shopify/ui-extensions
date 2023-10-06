import {createRemoteComponent} from '@remote-ui/core';
import {ActionProps, GlobalProps, Tone} from '../shared';

export interface BannerProps extends GlobalProps, ActionProps {
  /**
   * Message to display inside the banner
   */
  title?: string;
  /**
   * Adjusts the color and icon of the banner
   */
  tone?: Tone;
  /**
   * Whether or not the banner can be dismissed
   */
  collapsible?: boolean;
  /**
   * Function invoked when the banner is dismissed
   */
  onDismiss?: () => void;
}

export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
