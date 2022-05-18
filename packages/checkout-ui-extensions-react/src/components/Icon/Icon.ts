import {Icon as BaseIcon} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type IconProps = ReactPropsFromRemoteComponentType<typeof BaseIcon>;

export const Icon = createRemoteReactComponent(BaseIcon);
