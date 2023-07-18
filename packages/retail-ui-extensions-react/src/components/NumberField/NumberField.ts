import {NumberField as BaseNumberField} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {NumberFieldProps} from '@shopify/retail-ui-extensions';

export const NumberField = createRemoteReactComponent(BaseNumberField);
