import {PinPad as BasePinPad} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {PinPadProps} from '@shopify/retail-ui-extensions';

export const PinPad = createRemoteReactComponent(BasePinPad);
