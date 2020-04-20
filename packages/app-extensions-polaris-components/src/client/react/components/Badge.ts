import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Badge as BaseBadge} from '../../core';

export type BadgeProps = ReactPropsFromRemoteComponentType<typeof BaseBadge>;
export const Badge = createRemoteReactComponent(BaseBadge);
