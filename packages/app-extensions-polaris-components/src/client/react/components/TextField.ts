import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {TextField as BaseTextField} from '../../core';

export type TextFieldProps = ReactPropsFromRemoteComponentType<typeof BaseTextField>;
export const TextField = createRemoteReactComponent(BaseTextField);
