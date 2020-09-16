import {createRemoteComponent} from '@remote-ui/core';

export interface ClickableProps {
  onPress: () => void;
}

export const Clickable = createRemoteComponent<'Clickable', ClickableProps>('Clickable');
