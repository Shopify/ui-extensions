import {DateField as BaseDateField} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {DateFieldProps} from '@shopify/ui-extensions/point-of-sale';

export const DateField = createRemoteReactComponent(BaseDateField);
