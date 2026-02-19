import {createRemoteComponent} from '@remote-ui/core';

import {
  AccessibilityRoleProps,
  GlobalProps,
  SizingProps,
  PaddingProps,
  GapProps,
  CrossAxisAlignment,
  MainAxisAlignment,
} from '../shared';

/**
 * Props for the BlockStack component, which arranges its children in a
 * vertical stack (block axis). Use BlockStack to lay out components
 * vertically with consistent spacing and alignment.
 */
export interface BlockStackProps
  extends AccessibilityRoleProps,
    Pick<GapProps, 'gap' | 'blockGap' | 'rowGap'>,
    GlobalProps,
    SizingProps,
    PaddingProps {
  /**
   * A label that describes the purpose or contents of the element. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;

  /**
   * The alignment of children along the inline (horizontal) axis within the stack.
   * Use this to control how children are horizontally aligned in a vertical
   * stack layout.
   *
   * @defaultValue 'start'
   */
  inlineAlignment?: CrossAxisAlignment;

  /**
   * The alignment of children along the block (vertical) axis within the stack.
   * Use this to control how children are vertically distributed in a
   * vertical stack layout.
   *
   * @defaultValue 'start'
   */
  blockAlignment?: MainAxisAlignment;
}

/**
 * BlockStack arranges its children in a vertical stack (block axis) with
 * configurable spacing and alignment.
 */
export const BlockStack = createRemoteComponent<'BlockStack', BlockStackProps>(
  'BlockStack',
);
