import {createRemoteComponent} from '@remote-ui/core';

export type Alignment = 'leading' | 'center' | 'trailing';
export type Spacing = 'xtight' | 'tight' | 'loose' | 'xloose';

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
