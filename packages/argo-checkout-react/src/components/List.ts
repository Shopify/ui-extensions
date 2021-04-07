import {
  List as BaseList,
  ListItem as BaseListItem,
} from '@shopify/argo-checkout';
import {createRemoteReactComponent} from '@remote-ui/react';

export const List = createRemoteReactComponent(BaseList);
export const ListItem = createRemoteReactComponent(BaseListItem);
