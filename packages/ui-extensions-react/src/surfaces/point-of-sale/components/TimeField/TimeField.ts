import {TimeField as BaseTimeField} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {TimeFieldProps} from '@shopify/ui-extensions/point-of-sale';

export const TimeField = createRemoteReactComponent(BaseTimeField);
