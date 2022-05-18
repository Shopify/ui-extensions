import {Image as BaseImage} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ImageProps = ReactPropsFromRemoteComponentType<typeof BaseImage>;

export const Image = createRemoteReactComponent(BaseImage);
