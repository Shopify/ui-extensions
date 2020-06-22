import {createRemoteComponent} from '@remote-ui/core';

export interface HiddenForAccessibilityProps {}

/**
 * HiddenForAccessibility removes all of its children from the accessibility tree.
 * This can be used to improve the experience for assistive technology users by
 * hiding purely decorative content, duplicated content and offscreen or collapsed content.
 */
export const HiddenForAccessibility = createRemoteComponent<
  'HiddenForAccessibility',
  HiddenForAccessibilityProps
>('HiddenForAccessibility');
