import {createRemoteComponent} from '@remote-ui/core';

export interface ClickableProps {
  onClick: () => void;
  children?: React.ReactNode;
}

export const Clickable = createRemoteComponent<'Clickable', ClickableProps>('Clickable');
