import {BlockSpacer as BaseBlockSpacer} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type BlockSpacerProps = ReactPropsFromRemoteComponentType<
  typeof BaseBlockSpacer
>;

export const BlockSpacer = createRemoteReactComponent(BaseBlockSpacer);
