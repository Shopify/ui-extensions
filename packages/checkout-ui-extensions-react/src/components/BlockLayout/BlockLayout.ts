import {BlockLayout as BaseBlockLayout} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type BlockLayoutProps = ReactPropsFromRemoteComponentType<
  typeof BaseBlockLayout
>;

export const BlockLayout = createRemoteReactComponent(BaseBlockLayout);
