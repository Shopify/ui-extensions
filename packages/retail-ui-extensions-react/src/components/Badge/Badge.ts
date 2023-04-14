import {Badge as BaseBadge} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {BadgeProps} from '@shopify/retail-ui-extensions';

export const Badge = createRemoteReactComponent(BaseBadge);
