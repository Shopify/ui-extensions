import {BlockStack as BaseBlockStack} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type BlockStackProps = ReactPropsFromRemoteComponentType<
  typeof BaseBlockStack
>;

export const BlockStack = createRemoteReactComponent(BaseBlockStack);
