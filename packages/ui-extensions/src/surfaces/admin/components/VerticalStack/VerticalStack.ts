import {createRemoteComponent} from '@remote-ui/core';
import type {
  AccessibilityRoleProps,
  CrossAxisAlignment,
  GapProps,
  MainAxisAlignment,
  PaddingProps,
  SizingProps,
} from '../shared';

export interface VerticalStackProps
  extends AccessibilityRoleProps,
    GapProps,
    PaddingProps,
    SizingProps {
  /**
   * A label that describes the purpose or contents of the element. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;

  /**
   * Position children along the cross axis
   *
   * @defaultValue 'start'
   */
  horizontalAlignment?: CrossAxisAlignment;

  /**
   * Position children along the main axis
   *
   * @defaultValue 'start'
   */
  verticalAlignment?: MainAxisAlignment;
}

export const VerticalStack = createRemoteComponent<
  'VerticalStack',
  VerticalStackProps
>('VerticalStack');
