import {createRemoteComponent} from '@remote-ui/core';

interface FilterControl {
  queryValue?: string;
  queryPlaceholder?: string;
  onQueryChange(queryValue: string): void;
  onQueryClear(): void;
}

export interface ResourceListProps {
  filterControl?: FilterControl;
}

export const ResourceList = createRemoteComponent<
  'ResourceList',
  ResourceListProps
>('ResourceList');
