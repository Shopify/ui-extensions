import {SkeletonText as BaseSkeletonText} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type SkeletonTextProps = ReactPropsFromRemoteComponentType<
  typeof BaseSkeletonText
>;

export const SkeletonText = createRemoteReactComponent(BaseSkeletonText);
