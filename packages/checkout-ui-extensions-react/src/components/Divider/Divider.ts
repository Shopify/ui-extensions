import {Divider as BaseDivider} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type DividerProps = ReactPropsFromRemoteComponentType<
  typeof BaseDivider
>;

export const Divider = createRemoteReactComponent(BaseDivider);
