import {createRemoteComponent} from '@remote-ui/core';

import {
  ViewLikeAccessibilityRole,
  Spacing,
  InlineAlignment,
  BlockAlignment,
} from '../shared';

export interface InlineStackProps {
  /**
   * Sets the semantic meaning of the component’s content. When provided,
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
  /**
   * Position children along the cross axis
   *
   * @defaultValue 'start'
   */
  blockAlignment?: BlockAlignment;
  /**
   * Position children along the main axis
   *
   * @defaultValue 'start'
   */
  inlineAlignment?: InlineAlignment;
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
