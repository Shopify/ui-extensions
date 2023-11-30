import {List as BaseList} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {
  ListProps,
  ListRow,
  ListRowLeftSide,
  ListRowRightSide,
  ListRowSubtitle,
} from '@shopify/ui-extensions/point-of-sale';

export const List = createRemoteReactComponent(BaseList);
