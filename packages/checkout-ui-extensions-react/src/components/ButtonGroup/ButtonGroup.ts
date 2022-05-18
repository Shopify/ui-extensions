import {ButtonGroup as BaseButtonGroup} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ButtonGroupProps = ReactPropsFromRemoteComponentType<
  typeof BaseButtonGroup
>;

export const ButtonGroup = createRemoteReactComponent(BaseButtonGroup);
