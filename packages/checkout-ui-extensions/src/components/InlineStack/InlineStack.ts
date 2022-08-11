import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeConditionalStyle} from '../../style';
import type {
  BlockAlignment,
  BorderProps,
  InlineAlignment,
  SizingProps,
  Spacing,
  SpacingProps,
  ViewLikeAccessibilityRole,
} from '../shared';

export interface InlineStackProps
  extends BorderProps,
    SizingProps,
    SpacingProps {
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help buyers
   * navigate the page.
   *
   *
   * For example:
   *
   * - In an HTML host a `'listItem'` string will render: `<li>`
   *
   * - In an HTML host a `['listItem', 'separator']` tuple will render: `<li role='separator'>`
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
  /**
   * A label that describes the purpose or contents of the element. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
  /**
   * Position children along the cross axis
   *
   * @defaultValue 'start'
   */
  blockAlignment?: MaybeConditionalStyle<BlockAlignment>;
  /**
   * Position children along the main axis
   *
   * @defaultValue 'start'
   */
  inlineAlignment?: MaybeConditionalStyle<InlineAlignment>;
  /**
   * Adjust spacing between children
   *
   * @defaultValue 'base'
   **/
  spacing?: MaybeConditionalStyle<Spacing>;
}

/**
 * InlineStack is used to lay out a horizontal row of elements. Elements always wrap.
 */
export const InlineStack = createRemoteComponent<
  'InlineStack',
  InlineStackProps
>('InlineStack');
