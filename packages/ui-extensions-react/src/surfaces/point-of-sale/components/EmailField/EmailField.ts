import {EmailField as BaseEmailField} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {EmailFieldProps} from '@shopify/ui-extensions/point-of-sale';

export const EmailField = createRemoteReactComponent(BaseEmailField);
