import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

/**
 * Configure the following properties on the list item component.
 * @publicDocs
 */
export interface ListItemProps extends IdProps {}

/**
 * List items are used as children of the `List` component.
 *
 * They usually begin with a bullet or a number.
 */
export const ListItem = createRemoteComponent<'ListItem', ListItemProps>(
  'ListItem',
);
