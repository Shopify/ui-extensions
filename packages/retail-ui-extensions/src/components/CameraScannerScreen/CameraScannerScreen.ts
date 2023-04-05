import {createRemoteComponent} from '@remote-ui/core';
import {ScreenProps} from '../Screen';

export interface CameraScannerScreenProps extends Omit<ScreenProps, 'name'> {
  onBarcodeScanned: (data: string) => void;
  halfScreen?: boolean;
}

export const CameraScannerScreen = createRemoteComponent<
  'CameraScannerScreen',
  CameraScannerScreenProps
>('CameraScannerScreen');
