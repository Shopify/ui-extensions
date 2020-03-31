import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface ClickableProps {
  onClick: () => void;
}

export const Clickable = createRemoteComponent<'Clickable', ClickableProps>('Clickable');
