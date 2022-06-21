import {createRemoteComponent} from '@remote-ui/core';

import type {Spacing} from '../shared';
import type {MaybeConditionalStyle} from '../../style';

export type Marker = 'none' | 'bullet' | 'number';

export interface ListProps {
  /**
   * Adjust spacing between list items
   *
   * @defaultValue 'base'
   */
  spacing?: MaybeConditionalStyle<Spacing>;
  /**
   * Type of marker to display
   *
   * @defaultValue 'bullet'
   */
  marker?: Marker;
  /**
   * A label that describes the purpose or contents of the list. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
}

/**
 * Lists display a set of related content. Each list item usually begins with a bullet or a number.
 */
export const List = createRemoteComponent<'List', ListProps>('List');
