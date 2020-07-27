import {createRemoteComponent} from '@remote-ui/core';

export interface ClickableProps {
  onClick: () => void;
}

export const Clickable = createRemoteComponent<'Clickable', ClickableProps>('Clickable');
