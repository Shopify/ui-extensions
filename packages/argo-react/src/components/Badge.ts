import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {Badge as BaseBadge} from '@shopify/argo/components';

export type BadgeProps = ReactPropsFromRemoteComponentType<typeof BaseBadge>;
export const Badge = createRemoteReactComponent(BaseBadge);
