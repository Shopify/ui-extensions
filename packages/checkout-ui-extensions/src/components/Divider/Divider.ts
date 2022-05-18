import {createRemoteComponent} from '@remote-ui/core';

type Direction = 'horizontal' | 'vertical';
type Width = 'thin' | 'medium' | 'thick' | 'extraThick';
type Alignment = 'start' | 'center' | 'end';

export interface DividerProps {
  /**
   * Use to create dividers with varying widths.
   *
   * @defaultValue 'thin'
   */
  width?: Width;

  /**
   * Use to specify direction of divider.
   *
   * @defaultValue 'horizontal'
   */
  direction?: Direction;

  /**
   * Use to specify alignment of contents of divider.
   *
   * @defaultValue 'center'
   */
  alignment?: Alignment;
}

/**
 * A divider separates content and represents a thematic break between elements.
 */
export const Divider = createRemoteComponent<'Divider', DividerProps>(
  'Divider',
);
