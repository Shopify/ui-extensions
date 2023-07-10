import {createRemoteComponent} from '@remote-ui/core';

import {
  AccessibilityRoleProps,
  GlobalProps,
  SizingProps,
  PaddingProps,
  GapProps,
} from '../shared';

export interface InlineStackProps
  extends AccessibilityRoleProps,
    GapProps,
    GlobalProps,
    SizingProps,
    PaddingProps {
  /**
   * A label that describes the purpose or contents of the element. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
}

export const InlineStack = createRemoteComponent<
  'InlineStack',
  InlineStackProps
>('InlineStack');
