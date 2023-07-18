import {DateField as BaseDateField} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {DateFieldProps} from '@shopify/retail-ui-extensions';

export const DateField = createRemoteReactComponent(BaseDateField);
