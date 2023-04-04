import {createRemoteComponent} from '@remote-ui/core';

export type TagVariant =
  | 'neutral'
  | 'critical'
  | 'warning'
  | 'success'
  | 'highlight';

export interface TagProps {
  text: string;
  variant: TagVariant;
}

export const Tag = createRemoteComponent<'Tag', TagProps>('Tag');
