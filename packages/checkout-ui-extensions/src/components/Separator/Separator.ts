import {createRemoteComponent} from '@remote-ui/core';

type Direction = 'horizontal' | 'vertical';
type Width = 'thin' | 'medium' | 'thick' | 'extraThick';

export interface SeparatorProps {
  width?: Width;
  direction?: Direction;
}

export const Separator = createRemoteComponent<'Separator', SeparatorProps>(
  'Separator',
);
