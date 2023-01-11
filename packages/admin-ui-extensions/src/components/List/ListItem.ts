import {createRemoteComponent} from '@remote-ui/core';

export interface ListItemProps {}

/**
 * ListItems are child items of the List component.
 */
export const ListItem = createRemoteComponent<'ListItem', ListItemProps>(
  'ListItem',
);
