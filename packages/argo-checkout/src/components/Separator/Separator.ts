import {createRemoteComponent} from '@remote-ui/core';

export type Direction = 'horizontal' | 'vertical';
export type Width = 'thin' | 'medium' | 'thick' | 'xthick';

export interface SeparatorProps {
  width?: Width;
  direction?: Direction;
}

export const Separator = createRemoteComponent<'Separator', SeparatorProps>(
  'Separator',
);
