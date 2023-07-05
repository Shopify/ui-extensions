import {createRemoteComponent} from '@remote-ui/core';

export interface AppBlockProps {
  title?: string;
  summary?: string;
  children: any;
}
/**
 * AppBlock is a component used by Admin Block extensions to configure a title and summary.
 */
export const AppBlock = createRemoteComponent<'AppBlock', AppBlockProps>(
  'AppBlock',
);
