import {createRemoteComponent} from '@remote-ui/core';

import type {
  ViewLikeAccessibilityRole,
  Spacing,
  InlineAlignment,
} from '../shared';
import {MaybeConditionalStyle} from '../../style';

export interface BlockStackProps {
  /**
   * Position children along the main axis
   */
  inlineAlignment?: MaybeConditionalStyle<InlineAlignment>;
  /**
   * Adjust spacing between children
   *
   * @defaultValue 'base'
   */
  spacing?: MaybeConditionalStyle<Spacing>;
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help buyers
   * navigate the page.
   *
   *
   * Examples:
   *
   * - In an HTML host a `['listItem', 'separator']` tuple will render: <li role='separator'>
   *
   * - In an HTML host a `listItem` string will render: <li>
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
  /**
   * A label that describes the purpose or contents of the element. When set,
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
