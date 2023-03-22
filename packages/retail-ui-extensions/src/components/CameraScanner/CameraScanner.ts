import {createRemoteComponent} from '@remote-ui/core';

export interface CameraScannerProps {
  onBarcodeScanned: (data: string) => void;
}

export const CameraScanner = createRemoteComponent<
  'CameraScanner',
  CameraScannerProps
>('CameraScanner');
