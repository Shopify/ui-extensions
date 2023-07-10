import {createRemoteComponent} from '@remote-ui/core';
import type {
  AccessibilityRoleProps,
  PaddingProps,
  SizingProps,
} from '../shared';

export interface BoxProps
  extends AccessibilityRoleProps,
    SizingProps,
    PaddingProps {}

export const Box = createRemoteComponent<'Box', BoxProps>('Box');
