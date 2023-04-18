import {CameraScanner as BaseCameraScanner} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {CameraScannerProps} from '@shopify/retail-ui-extensions';

export const CameraScanner = createRemoteReactComponent(BaseCameraScanner);
