import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Icon as BaseIcon} from '../../core';

export type IconProps = ReactPropsFromRemoteComponentType<typeof BaseIcon>;
export const Icon = createRemoteReactComponent(BaseIcon);
