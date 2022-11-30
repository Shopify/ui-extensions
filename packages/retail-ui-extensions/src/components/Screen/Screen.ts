import {createRemoteComponent} from '@remote-ui/core';

export interface ScreenProps {
  name: string;
}

export const Screen = createRemoteComponent<'Screen', ScreenProps>('Screen');
