import {createRemoteComponent} from '../utilities';

export interface ClickableProps {
  onClick: () => void;
}

export const Clickable = createRemoteComponent<'Clickable', ClickableProps>('Clickable');
