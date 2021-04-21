import {createRemoteComponent} from '@remote-ui/core';

export interface ResourceItemProps {
  id: string;
  onPress(): void;
}

export const ResourceItem = createRemoteComponent<
  'ResourceItem',
  ResourceItemProps
>('ResourceItem');
