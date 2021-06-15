import {createRemoteComponent} from '@remote-ui/core';

interface FilterControl {
  /** Search query value */
  queryValue?: string;

  /** Placeholder for search query field */
  queryPlaceholder?: string;

  /** Callback when search query changes */
  onQueryChange(queryValue: string): void;

  /** Callback when the search field is cleared */
  onQueryClear(): void;
}

export interface ResourceListProps {
  filterControl?: FilterControl;
}

/**
 * `ResourceList` displays a filterable collection of objects of the same type, like products or customers.
 *
 * `ResourceList` should help merchants find an object and navigate to a full-page representation of it.
 * A resource list should contain `ResourceItem` components.
 */
export const ResourceList = createRemoteComponent<
  'ResourceList',
  ResourceListProps
>('ResourceList');
