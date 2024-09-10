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
   * @deprecated CameraScanner has been deprecated. Use the CameraScannerNext component instead.
   */
  title: string;

  /**
   * The appearance of the banner.
   * @deprecated CameraScanner has been deprecated. Use the CameraScannerNext component instead.
   */
  variant: BannerVariant;
  /**
   * The visibility state of the banner.
   * @deprecated CameraScanner has been deprecated. Use the CameraScannerNext component instead.
   */
  visible: boolean;
}

export interface CameraScannerProps {
  bannerProps?: CameraScannerBannerProps;
}

export const CameraScanner = createRemoteComponent<
  'CameraScanner',
  CameraScannerProps
>('CameraScanner');
