import {createRemoteComponent} from '@remote-ui/core';

import {AccessibilityRole} from '../shared';

type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';

export interface InlineStackProps {
  /**
   * Sets the semantic meaning of the component's content.
   */
  accessibilityRole?:
    | AccessibilityRole
    | [AccessibilityRole, AccessibilityRole];
  /**
   * A label that describes the purpose or contents of the element. When provided,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
  /**
   * Position children along the cross axis
   *
   * @defaultValue 'leading'
   */
  blockAlignment?: 'leading' | 'center' | 'trailing' | 'baseline';
  /**
   * Position children along the main axis
   *
   * @defaultValue 'leading'
   */
  inlineAlignment?: 'leading' | 'center' | 'trailing';
  /**
   * Adjust spacing between children
   *
   * @defaultValue 'base'
   **/
  spacing?: Spacing;
}

/**
 * InlineStack is used to lay out a horizontal row of elements. Elements always wrap.
 */
export const InlineStack = createRemoteComponent<
  'InlineStack',
  InlineStackProps
>('InlineStack');
