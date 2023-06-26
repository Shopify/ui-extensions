import {Divider as BaseDivider} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type DividerProps = ReactPropsFromRemoteComponentType<
  typeof BaseDivider
>;

export const Divider = createRemoteReactComponent(BaseDivider);
