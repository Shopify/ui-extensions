import {createRemoteComponent} from '../utilities';

interface FilterControl {
  queryValue?: string;
  queryPlaceholder?: string;
  onQueryChange(queryValue: string): void;
  onQueryClear(): void;
}

export interface ResourceListProps {
  filterControl?: FilterControl;
}

export const ResourceList = createRemoteComponent<'ResourceList', ResourceListProps>(
  'ResourceList',
);
