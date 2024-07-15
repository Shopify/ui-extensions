import {HiddenField as BaseHiddenField} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const HiddenField = createRemoteReactComponent(BaseHiddenField);
export type {HiddenFieldProps} from '@shopify/ui-extensions/admin';
