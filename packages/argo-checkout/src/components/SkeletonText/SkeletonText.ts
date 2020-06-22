import {createRemoteComponent} from '@remote-ui/core';

export interface SkeletonTextProps {
  lines?: number;
}

export const SkeletonText = createRemoteComponent<
  'SkeletonText',
  SkeletonTextProps
>('SkeletonText');
