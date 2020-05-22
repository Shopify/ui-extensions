import {createRemoteComponent} from '@remote-ui/core';

export interface ResourceItemProps {
  id: string | number;
  onClick(): void;
  children?: React.ReactNode;
}

export const ResourceItem = createRemoteComponent<'ResourceItem', ResourceItemProps>(
  'ResourceItem',
);
