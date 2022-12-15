import {createRemoteComponent} from '@remote-ui/core';

export interface ListItemProps {}

/**
 * List items are used as children of the `List` component.
 *
 * They usually begins with a bullet or a number.
 */
export const ListItem = createRemoteComponent<'ListItem', ListItemProps>(
  'ListItem',
);
