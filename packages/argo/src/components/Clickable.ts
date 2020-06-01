import {createRemoteComponent} from '../utilities';

export interface ClickableProps {
  onClick: () => void;
  children?: React.ReactNode;
}

export const Clickable = createRemoteComponent<'Clickable', ClickableProps>('Clickable');
