import {InlineStack as BaseInlineStack} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type InlineStackProps = ReactPropsFromRemoteComponentType<
  typeof BaseInlineStack
>;

export const InlineStack = createRemoteReactComponent(BaseInlineStack);
