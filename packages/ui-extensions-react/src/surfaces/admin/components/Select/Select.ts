import {Select as BaseSelect} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Select = createRemoteReactComponent(BaseSelect);
export type {SelectProps} from '@shopify/ui-extensions/admin';
