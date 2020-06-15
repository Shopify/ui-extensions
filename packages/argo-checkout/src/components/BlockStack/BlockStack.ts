import {createRemoteComponent} from '../../utilities';

type Alignment = 'leading' | 'center' | 'trailing';
type Spacing = 'tight' | 'loose' | 'xtight';

export interface BlockStackProps {
  alignment?: Alignment;
  spacing?: Spacing;
}

export const BlockStack = createRemoteComponent<'BlockStack', BlockStackProps>(
  'BlockStack',
);
