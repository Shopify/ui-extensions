import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {ResourceList as BaseResourceList} from '@shopify/argo/components';

export type ResourceListProps = ReactPropsFromRemoteComponentType<typeof BaseResourceList>;
export const ResourceList = createRemoteReactComponent(BaseResourceList);
