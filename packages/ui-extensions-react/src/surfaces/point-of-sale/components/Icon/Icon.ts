import {Icon as BaseIcon} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {IconProps} from '@shopify/ui-extensions/point-of-sale';

export const Icon = createRemoteReactComponent(BaseIcon);
