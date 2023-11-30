import {NumberField as BaseNumberField} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {NumberFieldProps} from '@shopify/ui-extensions/point-of-sale';

export const NumberField = createRemoteReactComponent(BaseNumberField);
