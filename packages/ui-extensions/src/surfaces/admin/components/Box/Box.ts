import {createRemoteComponent} from '@remote-ui/core';
import type {
  AccessibilityRoleProps,
  PaddingProps,
  SizingProps,
} from '../shared';

/**
 * Props for the Box component, a generic layout container. Box doesn't
 * define any props of its own. It inherits accessibility, sizing, padding,
 * and display props from shared interfaces.
 *
 * @publicDocs
 */
export interface BoxProps
  extends AccessibilityRoleProps,
    SizingProps,
    PaddingProps {}

/**
 * Box is a generic layout container for grouping content. It provides
 * accessibility roles, sizing, padding, and display controls without any
 * visual styling of its own.
 */
export const Box = createRemoteComponent<'Box', BoxProps>('Box');
