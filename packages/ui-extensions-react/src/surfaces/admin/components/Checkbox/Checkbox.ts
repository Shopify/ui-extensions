import {Checkbox as BaseCheckbox} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Checkbox = createRemoteReactComponent(BaseCheckbox);
export type {CheckboxProps} from '@shopify/ui-extensions/admin';
