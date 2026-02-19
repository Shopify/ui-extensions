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
 * Props for the InlineStack component, a horizontal layout container that
 * arranges children in a row along the inline axis. Inherits accessibility,
 * sizing, padding, and gap props from shared utilities.
 */
export interface InlineStackProps
  extends AccessibilityRoleProps,
    AccessibilityLabelProps,
    GapProps,
    GlobalProps,
    SizingProps,
    PaddingProps {
  /**
   * The alignment of children along the inline (horizontal) axis within the stack.
   * Use this to control how children are horizontally distributed in a
   * horizontal stack layout.
   *
   * @defaultValue 'start'
   */
  inlineAlignment?: MainAxisAlignment;

  /**
   * The alignment of children along the block (vertical) axis within the stack.
   * Use this to control how children are vertically aligned in a horizontal
   * stack layout.
   *
   * @defaultValue 'start'
   */
  blockAlignment?: CrossAxisAlignment;
}

/**
 * A horizontal layout container that arranges its children in a row
 * along the inline axis, with configurable alignment and spacing.
 */
export const InlineStack = createRemoteComponent<
  'InlineStack',
  InlineStackProps
>('InlineStack');
