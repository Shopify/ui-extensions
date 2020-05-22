import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {Icon as BaseIcon} from '@shopify/argo/components';

export type IconProps = ReactPropsFromRemoteComponentType<typeof BaseIcon>;
export const Icon = createRemoteReactComponent(BaseIcon);
