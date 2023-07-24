import {TextField as BaseTextField} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {
  TextFieldProps,
  NewTextFieldProps,
} from '@shopify/retail-ui-extensions';

export const TextField = createRemoteReactComponent(BaseTextField);
