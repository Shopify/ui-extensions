import {ResourceItem as BaseResourceItem} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const ResourceItem = createRemoteReactComponent(BaseResourceItem);
export type ResourceItemProps = ReactPropsFromRemoteComponentType<
  typeof BaseResourceItem
>;
