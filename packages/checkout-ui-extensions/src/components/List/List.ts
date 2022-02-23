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
  /**
   * A label that describes the purpose or contents of the list. When provided,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
}

export interface ListItemProps {}

/**
 * Lists display a set of related content. Each list item usually begins with a bullet or a number.
 */
export const List = createRemoteComponent<'List', ListProps>('List');

export const ListItem = createRemoteComponent<'ListItem', ListItemProps>(
  'ListItem',
);
