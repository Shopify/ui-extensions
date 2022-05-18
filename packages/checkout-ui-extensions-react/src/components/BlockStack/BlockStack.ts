import {BlockStack as BaseBlockStack} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type BlockStackProps = ReactPropsFromRemoteComponentType<
  typeof BaseBlockStack
>;

export const BlockStack = createRemoteReactComponent(BaseBlockStack);
