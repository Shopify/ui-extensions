import {createRemoteComponent} from '@remote-ui/core';

export type BannerType =
  | 'Success'
  | 'Warning'
  | 'Error'
  | 'Info'
  | 'Critical'
  | 'Default';

export interface Information {
  message: string;
  bannerType?: BannerType;
}

export interface CameraScannerProps {
  barcodeStatus?: Information;
  showBanner?: boolean;
}

export const CameraScanner = createRemoteComponent<
  'CameraScanner',
  CameraScannerProps
>('CameraScanner');
