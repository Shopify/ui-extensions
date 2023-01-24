import {Badge as BaseBadge} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const Badge = createRemoteReactComponent(BaseBadge);

export type BadgeProps = ReactPropsFromRemoteComponentType<typeof BaseBadge>;
