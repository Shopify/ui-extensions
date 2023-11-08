import {Tooltip as BaseTooltip} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Tooltip = createRemoteReactComponent(BaseTooltip);
export type {TooltipProps} from '@shopify/ui-extensions/admin';
