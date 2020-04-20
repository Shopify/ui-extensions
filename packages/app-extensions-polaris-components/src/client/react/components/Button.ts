import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Button as BaseButton} from '../../core';

export type ButtonProps = ReactPropsFromRemoteComponentType<typeof BaseButton>;
export const Button = createRemoteReactComponent(BaseButton);
