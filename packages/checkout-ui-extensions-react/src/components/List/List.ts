import {List as BaseList} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ListProps = ReactPropsFromRemoteComponentType<typeof BaseList>;

export const List = createRemoteReactComponent(BaseList);
