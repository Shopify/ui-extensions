import {createRemoteComponent} from '@remote-ui/core';

import {AccessibilityRole} from '../shared';

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
   * @defaultValue 'base'
   **/
  spacing?: Spacing;
  /** Set the semantic of the component’s content */
  accessibilityRole?:
    | AccessibilityRole
    | [AccessibilityRole, AccessibilityRole];
}

/**
 * BlockStack is used to vertically stack elements
 */
export const BlockStack = createRemoteComponent<'BlockStack', BlockStackProps>(
  'BlockStack',
);
