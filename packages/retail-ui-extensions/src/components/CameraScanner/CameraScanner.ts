import {createRemoteComponent} from '@remote-ui/core';

export type BannerType =
  | 'Success'
  | 'Warning'
  | 'Error'
  | 'Info'
  | 'Critical'
  | 'Default';

export interface CameraScannerBannerProps {
  title: string;
  variant?: BannerType;
  visible?: boolean;
}

export interface CameraScannerProps {
  bannerProps?: CameraScannerBannerProps;
}

export const CameraScanner = createRemoteComponent<
  'CameraScanner',
  CameraScannerProps
>('CameraScanner');
