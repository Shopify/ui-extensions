import {createRemoteComponent} from '@remote-ui/core';

export interface ListProps {
  /** Type of list to display. */
  type: 'bullet' | 'number';
}

/**
 * Lists display a set of related text-only content. Each list item begins with a bullet or a number.
 */
export const List = createRemoteComponent<'List', ListProps>('List');
