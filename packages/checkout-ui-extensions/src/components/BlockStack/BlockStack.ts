import {createRemoteComponent} from '@remote-ui/core';

import {ViewLikeAccessibilityRole, Spacing, InlineAlignment} from '../shared';

export interface BlockStackProps {
  /**
   * Position children along the main axis
   */
  inlineAlignment?: InlineAlignment;
  /**
   * Adjust spacing between children
   *
   * @defaultValue 'base'
   */
  spacing?: Spacing;
  /**
   * Sets the semantic meaning of the component’s content.  When provided,
   * the role will be used by assistive technologies to help buyers
   * navigate the page.
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
  /**
   * A label that describes the purpose or contents of the element. When provided,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
}

/**
 * BlockStack is used to vertically stack elements.
 */
export const BlockStack = createRemoteComponent<'BlockStack', BlockStackProps>(
  'BlockStack',
);
