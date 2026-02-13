import {createRemoteComponent} from '@remote-ui/core';
import type {LinkProps} from '../Link/Link';
import type {BoxProps} from '../Box/Box';

/**
 * Props for the Pressable component, which combines the layout capabilities
 * of Box with the interactive behavior of Link. Use Pressable when you
 * need a custom interactive area that can navigate to a URL or respond to
 * press events while supporting flexible layout and styling options.
 */
export interface PressableProps extends BoxProps, LinkProps {}

/** A Pressable component that combines Box layout with Link interactivity. */
export const Pressable = createRemoteComponent<'Pressable', PressableProps>(
  'Pressable',
);
