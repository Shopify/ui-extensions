import {createRemoteComponent} from '../utilities';

export interface ResourceItemProps {
  id: string | number;
  onClick(): void;
}

export const ResourceItem = createRemoteComponent<'ResourceItem', ResourceItemProps>(
  'ResourceItem',
);
