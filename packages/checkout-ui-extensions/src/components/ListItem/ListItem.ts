import {createRemoteComponent} from '@remote-ui/core';

export interface ListItemProps {}

export const ListItem = createRemoteComponent<'ListItem', ListItemProps>(
  'ListItem',
);
