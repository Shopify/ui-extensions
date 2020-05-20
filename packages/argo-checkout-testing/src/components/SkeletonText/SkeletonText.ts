import {createRemoteComponent} from '../../utilities';

export interface SkeletonTextProps {
  lines?: number;
}

export const SkeletonText = createRemoteComponent<
  'SkeletonText',
  SkeletonTextProps
>('SkeletonText');
