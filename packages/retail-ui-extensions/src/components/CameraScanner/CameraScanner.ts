import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export interface CameraScannerProps extends TestableComponentProps {}

export const CameraScanner = createRemoteComponent<
  'CameraScanner',
  CameraScannerProps
>('CameraScanner');
