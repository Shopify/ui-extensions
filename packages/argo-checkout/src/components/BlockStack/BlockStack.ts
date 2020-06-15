import {createRemoteComponent} from '../../utilities';

type Alignment = 'leading' | 'center' | 'trailing';
type Spacing = 'tight' | 'loose' | 'xtight';

export interface BlockStackProps {
  /** Position children along the cross axis */
  alignment?: Alignment;
  /** Adjust spacing between children */
  spacing?: Spacing;
}

/**
 * BlockStack is used to vertically stack elements
 */
export const BlockStack = createRemoteComponent<'BlockStack', BlockStackProps>(
  'BlockStack',
);
