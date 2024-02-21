import {List as BaseList} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {ListProps} from '@shopify/retail-ui-extensions';

export const List = createRemoteReactComponent(BaseList, {
  fragmentProps: ['listHeaderComponent'],
});
