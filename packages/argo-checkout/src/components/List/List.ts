import {createRemoteComponent} from '@remote-ui/core';

export type Marker = 'none' | 'bullet' | 'number';
export type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';

export interface ListProps {
  /**
   * Adjust spacing between list items
   * @defaultValue 'base'
   */
  spacing?: Spacing;
  /**
   * Type of marker to display
   * @defaultValue 'bullet'
   */
  marker?: Marker;
}

export interface ListItemProps {}

/**
 * Lists display a set of related content. Each list item usually begins with a bullet or a number.
 */
export const List = createRemoteComponent<'List', ListProps>('List');

export const ListItem = createRemoteComponent<'ListItem', ListItemProps>(
  'ListItem',
);
