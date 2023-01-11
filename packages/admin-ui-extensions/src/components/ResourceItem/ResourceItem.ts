import {createRemoteComponent} from '@remote-ui/core';

export interface ResourceItemProps {
  id: string;
  onPress?: any;
}

/**
 * Resource items represent specific objects within a collection, such as products or orders.
 * They provide contextual information on the resource type and link to the object’s detail page.
 *
 * A `ResourceItem` should be rendered within a `ResourceList`.
 */
export const ResourceItem = createRemoteComponent<
  'ResourceItem',
  ResourceItemProps
>('ResourceItem');
