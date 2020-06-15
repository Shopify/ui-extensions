import {createRemoteComponent} from '../../utilities';

type Spacing = 'xtight' | 'tight' | 'loose';
type Distribution = ('fill' | 'auto' | number)[];
type Alignment = 'leading' | 'center' | 'trailing' | 'fill' | 'baseline';

export interface InlineStackProps {
  spacing?: Spacing;
  fill?: boolean;
  alignment?: Alignment;
  distribution?: Distribution;
}

export const InlineStack = createRemoteComponent<
  'InlineStack',
  InlineStackProps
>('InlineStack');
