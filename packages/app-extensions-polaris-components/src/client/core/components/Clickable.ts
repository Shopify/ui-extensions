import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface ClickableProps {
  onClick: (e: MouseEvent) => void;
}

export const Clickable = createRemoteComponent<'Clickable', ClickableProps>('Clickable');
