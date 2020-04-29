import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface ClickableProps {
  onClick: () => void;
  children?: React.ReactNode;
}

export const Clickable = createRemoteComponent<'Clickable', ClickableProps>('Clickable');
