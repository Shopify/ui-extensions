import {createRemoteComponent} from '../utilities';

export interface ResourceItemProps {
  id: string;
  onClick(): void;
}

export const ResourceItem = createRemoteComponent<'ResourceItem', ResourceItemProps>(
  'ResourceItem',
);
