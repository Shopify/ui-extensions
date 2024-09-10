import {createRemoteComponent} from '@remote-ui/core';
import {BannerVariant} from '../Banner/Banner';

/**
 * @property title - The title of the banner.
 * @property variant - The appearance of the banner.
 * @property visible - The visibility state of the banner.
 */
export interface CameraScannerBannerProps {
  /**
   * The title of the banner.
   */
  title: string;

  /**
   * The appearance of the banner.
   */
  variant: BannerVariant;

  /**
   * The visibility state of the banner.
   */
  visible: boolean;
}

/**
 * @property overlayText - the scanner overlay default text on top of the scanner window.
 */

export interface CameraScannerProps {
  /**
   * @deprecated `bannerProps` has been deprecated. Use `overlayText` prop instead.
   */
  bannerProps?: CameraScannerBannerProps;

  /**
   * overlayText - the text to display on the scanner.
   */
  overlayText?: string;
}

export const CameraScanner = createRemoteComponent<
  'CameraScanner',
  CameraScannerProps
>('CameraScanner');
