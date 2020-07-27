import {createRemoteComponent} from '@remote-ui/core';

export interface ResourceItemProps {
  id: string;
  onClick(): void;
}

export const ResourceItem = createRemoteComponent<'ResourceItem', ResourceItemProps>(
  'ResourceItem',
);
