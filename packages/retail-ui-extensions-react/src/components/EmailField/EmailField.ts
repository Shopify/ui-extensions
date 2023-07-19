import {EmailField as BaseEmailField} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {EmailFieldProps} from '@shopify/retail-ui-extensions';

export const EmailField = createRemoteReactComponent(BaseEmailField);
