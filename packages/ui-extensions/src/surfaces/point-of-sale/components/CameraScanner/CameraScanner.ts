import {createRemoteComponent} from '@remote-ui/core';
import {BannerProps} from '../Banner/Banner';

export type CameraScannerBannerProps = Pick<
  BannerProps,
  'title' | 'variant' | 'visible'
>;

export interface CameraScannerProps {
  bannerProps?: CameraScannerBannerProps;
}

export const CameraScanner = createRemoteComponent<
  'CameraScanner',
  CameraScannerProps
>('CameraScanner');
