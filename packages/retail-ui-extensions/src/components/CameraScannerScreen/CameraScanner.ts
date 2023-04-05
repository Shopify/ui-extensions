import {createRemoteComponent} from '@remote-ui/core';

export interface CameraScannerScreenProps {
  onBarcodeScanned: (data: string) => void;
  halfScreen: boolean;
}

export const CameraScannerScreen = createRemoteComponent<
  'CameraScannerScreen',
  CameraScannerScreenProps
>('CameraScannerScreen');
