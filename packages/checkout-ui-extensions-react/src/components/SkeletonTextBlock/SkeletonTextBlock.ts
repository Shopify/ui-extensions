import {SkeletonTextBlock as BaseSkeletonTextBlock} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type SkeletonTextBlockProps = ReactPropsFromRemoteComponentType<
  typeof BaseSkeletonTextBlock
>;

export const SkeletonTextBlock = createRemoteReactComponent(
  BaseSkeletonTextBlock,
);
