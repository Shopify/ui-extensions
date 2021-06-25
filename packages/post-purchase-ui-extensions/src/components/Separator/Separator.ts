import {createRemoteComponent} from '@remote-ui/core';

type Direction = 'horizontal' | 'vertical';
type Width = 'thin' | 'medium' | 'thick' | 'xthick';

export interface SeparatorProps {
  width?: Width;
  direction?: Direction;
}

/**
 * Separators create visual separation between sections of an interface.
 */
export const Separator = createRemoteComponent<'Separator', SeparatorProps>(
  'Separator',
);
