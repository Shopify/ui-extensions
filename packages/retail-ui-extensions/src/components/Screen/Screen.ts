import {createRemoteComponent} from '@remote-ui/core';

export interface ScreenProps {
  title?: string;
}

export const Screen = createRemoteComponent<'Screen', ScreenProps>('Screen');
