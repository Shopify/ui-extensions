import {SkeletonText as BaseSkeletonText} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type SkeletonTextProps = ReactPropsFromRemoteComponentType<
  typeof BaseSkeletonText
>;

export const SkeletonText = createRemoteReactComponent(BaseSkeletonText);
