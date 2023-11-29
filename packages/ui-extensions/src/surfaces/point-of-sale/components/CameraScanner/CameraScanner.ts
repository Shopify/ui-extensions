import {createRemoteComponent} from '@remote-ui/core';

export interface CameraScannerProps {}

export const CameraScanner = createRemoteComponent<
  'CameraScanner',
  CameraScannerProps
>('CameraScanner');
