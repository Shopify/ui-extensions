import {GridItem as BaseGridItem} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type GridItemProps = ReactPropsFromRemoteComponentType<
  typeof BaseGridItem
>;

export const GridItem = createRemoteReactComponent(BaseGridItem);
