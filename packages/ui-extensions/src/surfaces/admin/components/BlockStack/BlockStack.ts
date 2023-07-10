import {createRemoteComponent} from '@remote-ui/core';

import {
  AccessibilityRoleProps,
  GlobalProps,
  SizingProps,
  PaddingProps,
  GapProps,
} from '../shared';

export interface BlockStackProps
  extends AccessibilityRoleProps,
    Pick<GapProps, 'gap' | 'blockGap' | 'rowGap'>,
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

export const BlockStack = createRemoteComponent<'BlockStack', BlockStackProps>(
  'BlockStack',
);
