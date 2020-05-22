import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {ResourceItem as BaseResourceItem} from '@shopify/argo/components';

export type ResourceItemProps = ReactPropsFromRemoteComponentType<typeof BaseResourceItem>;
export const ResourceItem = createRemoteReactComponent(BaseResourceItem);
