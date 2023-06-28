import {Tooltip as BaseTooltip} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type TooltipProps = ReactPropsFromRemoteComponentType<
  typeof BaseTooltip
>;

export const Tooltip = createRemoteReactComponent(BaseTooltip);
