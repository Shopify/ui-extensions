import {TimeField as BaseTimeField} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {TimeFieldProps} from '@shopify/retail-ui-extensions';

export const TimeField = createRemoteReactComponent(BaseTimeField);
