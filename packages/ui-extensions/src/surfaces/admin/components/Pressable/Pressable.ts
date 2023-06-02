import {createRemoteComponent} from '@remote-ui/core';

export interface PressableProps {
  /** Callback for the pressable. */
  onPress: () => void;
}

/**
 * Pressable wraps components to add interactivity with rendering a UI element.
 * Wrap small UI elements in Pressable to perform actions that don’t fit Button or Link.
 */
export const Pressable = createRemoteComponent<'Pressable', PressableProps>(
  'Pressable',
);
