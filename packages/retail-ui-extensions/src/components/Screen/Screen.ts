import {createRemoteComponent} from '@remote-ui/core';

export interface ScreenProps {
  name: string;
  isLoading?: boolean;
  onReceiveParams?: (params: any) => void;
}

export const Screen = createRemoteComponent<'Screen', ScreenProps>('Screen');
