import {PinPad as BasePinPad} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {PinPadProps} from '@shopify/ui-extensions/point-of-sale';

export const PinPad = createRemoteReactComponent(BasePinPad);
