import {Tooltip as BaseTooltip} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type TooltipProps = ReactPropsFromRemoteComponentType<
  typeof BaseTooltip
>;

export const Tooltip = createRemoteReactComponent(BaseTooltip);
