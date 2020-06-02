import {createRemoteComponent} from '../../utilities';

type Direction = 'horizontal' | 'vertical';
type Width = 'thin' | 'medium' | 'thick' | 'xthick';

export interface SeparatorProps {
  width?: Width;
  direction?: Direction;
}

export const Separator = createRemoteComponent<'Separator', SeparatorProps>(
  'Separator',
);
