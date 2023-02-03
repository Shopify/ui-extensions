import {BlockStack as BaseBlockStack} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const BlockStack = createRemoteReactComponent(BaseBlockStack);
export type BlockStackProps = ReactPropsFromRemoteComponentType<
  typeof BaseBlockStack
>;
