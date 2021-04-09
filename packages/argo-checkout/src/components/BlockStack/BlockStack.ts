import {createRemoteComponent} from '@remote-ui/core';

type Alignment = 'leading' | 'center' | 'trailing';
type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';

export interface BlockStackProps {
  /** Position children along the cross axis */
  alignment?: Alignment;
  /**
   * Adjust spacing between children
   * @default `base`
   **/
  spacing?: Spacing;
}

/**
 * BlockStack is used to vertically stack elements
 */
export const BlockStack = createRemoteComponent<'BlockStack', BlockStackProps>(
  'BlockStack',
);
