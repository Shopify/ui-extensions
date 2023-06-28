import {GridItem as BaseGridItem} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type GridItemProps = ReactPropsFromRemoteComponentType<
  typeof BaseGridItem
>;

export const GridItem = createRemoteReactComponent(BaseGridItem);
