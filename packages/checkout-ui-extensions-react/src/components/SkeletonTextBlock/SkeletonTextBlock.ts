import {SkeletonTextBlock as BaseSkeletonTextBlock} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type SkeletonTextBlockProps = ReactPropsFromRemoteComponentType<
  typeof BaseSkeletonTextBlock
>;

export const SkeletonTextBlock = createRemoteReactComponent(
  BaseSkeletonTextBlock,
);
