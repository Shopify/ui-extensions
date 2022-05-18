import {Tag as BaseTag} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type TagProps = ReactPropsFromRemoteComponentType<typeof BaseTag>;

export const Tag = createRemoteReactComponent(BaseTag);
