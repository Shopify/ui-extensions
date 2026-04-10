import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps, Spacing} from '../shared';
import type {MaybeResponsiveConditionalStyle} from '../../style/types';

export type Marker = 'none' | 'bullet' | 'number';

/**
 * Configure the following properties on the list component.
 * @publicDocs
 */
export interface ListProps extends IdProps {
  /**
   * Adjusts the vertical spacing between list items. Use a design system spacing keyword to control the density of the list.
   *
   * @defaultValue 'base'
   */
  spacing?: MaybeResponsiveConditionalStyle<Spacing>;
  /**
   * The type of marker displayed before each list item.
   *
   * - `none`: No marker is displayed.
   * - `bullet`: A bullet point marker for unordered lists.
   * - `number`: A number marker for ordered lists.
   *
   * @defaultValue 'bullet'
   */
  marker?: Marker;
  /**
   * A label that describes the purpose or contents of the list. When set, it will be announced to users of assistive technologies such as screen readers to provide additional context.
   */
  accessibilityLabel?: string;
}

/**
 * Lists display a set of related content. Each list item usually begins with a bullet or a number.
 */
export const List = createRemoteComponent<'List', ListProps>('List');
