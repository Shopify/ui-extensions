import {createRemoteComponent} from '@remote-ui/core';

export interface ScreenProps {
  name: string;
  onReceiveParams: (params: any) => void;
}

export const Screen = createRemoteComponent<'Screen', ScreenProps>('Screen');
