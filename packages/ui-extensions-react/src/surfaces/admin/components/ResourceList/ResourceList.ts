import {ResourceList as BaseResourceList} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const ResourceList = createRemoteReactComponent(BaseResourceList);
export type {ResourceListProps} from '@shopify/ui-extensions/admin';
