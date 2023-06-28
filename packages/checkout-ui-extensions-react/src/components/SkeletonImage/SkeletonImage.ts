import {SkeletonImage as BaseSkeletonImage} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type SkeletonImageProps = ReactPropsFromRemoteComponentType<
  typeof BaseSkeletonImage
>;

export const SkeletonImage = createRemoteReactComponent(BaseSkeletonImage);
