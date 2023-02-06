import {Popover as BasePopover} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type PopoverProps = ReactPropsFromRemoteComponentType<
  typeof BasePopover
>;

export const Popover = createRemoteReactComponent(BasePopover);
