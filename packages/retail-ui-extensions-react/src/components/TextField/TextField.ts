import {TextField as BaseTextField} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {
  TextFieldProps,
  NewTextFieldProps,
} from '@shopify/retail-ui-extensions';

/**
 * @deprecated
 * This TextField component will be replaced by NewTextField in version 2.0.0.
 * Please migrate to using NewTextField as soon as possible.
 */
export const TextField = createRemoteReactComponent(BaseTextField);
