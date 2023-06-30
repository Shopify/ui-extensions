import {createRemoteComponent} from '@remote-ui/core';

export interface AppBlockProps {
  title?: string;
  subtitle?: string;
  children: any;
}
/**
 * AppBlock is a component used by Admin Block extensions to configure a title and subtitle.
 */
export const AppBlock = createRemoteComponent<'AppBlock', AppBlockProps>(
  'AppBlock',
);
