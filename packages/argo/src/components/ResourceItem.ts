import {createRemoteComponent} from '../utilities';

export interface ResourceItemProps {
  id: string | number;
  onClick(): void;
  children?: React.ReactNode;
}

export const ResourceItem = createRemoteComponent<'ResourceItem', ResourceItemProps>(
  'ResourceItem',
);
