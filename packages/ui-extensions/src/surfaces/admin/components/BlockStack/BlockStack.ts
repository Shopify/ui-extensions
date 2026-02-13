import {createRemoteComponent} from '@remote-ui/core';

import {
  AccessibilityRoleProps,
  GlobalProps,
  SizingProps,
  PaddingProps,
  GapProps,
  CrossAxisAlignment,
  MainAxisAlignment,
  AccessibilityLabelProps,
} from '../shared';

/**
 * Props for the BlockStack component, which arranges its children in a
 * vertical stack (block axis). Use BlockStack to lay out components
 * vertically with consistent spacing and alignment.
 */
export interface BlockStackProps
  extends AccessibilityRoleProps,
    AccessibilityLabelProps,
    Pick<GapProps, 'gap' | 'blockGap' | 'rowGap'>,
    GlobalProps,
    SizingProps,
    PaddingProps {
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
