import {ListItem as BaseListItem} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ListItemProps = ReactPropsFromRemoteComponentType<
  typeof BaseListItem
>;

export const ListItem = createRemoteReactComponent(BaseListItem);
