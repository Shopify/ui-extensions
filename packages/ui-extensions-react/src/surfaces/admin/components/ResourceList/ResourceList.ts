import {ResourceList as BaseResourceList} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const ResourceList = createRemoteReactComponent(BaseResourceList);
export type ResourceListProps = ReactPropsFromRemoteComponentType<
  typeof BaseResourceList
>;
