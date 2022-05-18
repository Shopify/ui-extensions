import {InlineLayout as BaseInlineLayout} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type InlineLayoutProps = ReactPropsFromRemoteComponentType<
  typeof BaseInlineLayout
>;

export const InlineLayout = createRemoteReactComponent(BaseInlineLayout);
