import {createRemoteComponent} from '../utilities';

interface FilterControl {
  queryValue?: string;
  queryPlaceholder?: string;
  onQueryChange(queryValue: string): void;
  onQueryClear(): void;
}

export interface ResourceListProps {
  filterControl?: FilterControl;
  children?: React.ReactNode;
}

export const ResourceList = createRemoteComponent<'ResourceList', ResourceListProps>(
  'ResourceList',
);
