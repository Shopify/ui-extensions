import {createRemoteComponent} from '@remote-ui/core';
import type {ListItemProps as BaseListItemProps} from '@shopify/ui-api-design/dist/components/ListItem';

export interface ListItemProps extends Omit<BaseListItemProps, 'children'> {}

/**
 * ListItem is a component to be used inside `UnorderedList` and `OrderedList` components.
 *
 * List items have a blockish layout.
 */
export interface ListItem extends ListItemProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-list-item': ListItem;
  }
}

export const ListItem = createRemoteComponent<'ListItem', ListItemProps>(
  'ListItem',
);
