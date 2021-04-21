import {createRemoteComponent} from '@remote-ui/core';

export interface PressableProps {
  onPress: () => void;
}

export const Pressable = createRemoteComponent<'Pressable', PressableProps>(
  'Pressable',
);
