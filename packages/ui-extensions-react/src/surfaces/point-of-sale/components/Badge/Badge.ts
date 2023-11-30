import {Badge as BaseBadge} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {BadgeProps} from '@shopify/ui-extensions/point-of-sale';

export const Badge = createRemoteReactComponent(BaseBadge);
