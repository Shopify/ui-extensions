import {CameraScanner as BaseCameraScanner} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {CameraScannerProps} from '@shopify/ui-extensions/point-of-sale';

export const CameraScanner = createRemoteReactComponent(BaseCameraScanner);
