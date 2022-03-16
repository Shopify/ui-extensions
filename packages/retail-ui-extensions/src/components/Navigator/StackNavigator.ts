import {createRemoteComponent} from '@remote-ui/core';

export interface StackNavigatorProps {
  screenNames: string[];
}

export const StackNavigator = createRemoteComponent<
  'StackNavigator',
  StackNavigatorProps
>('StackNavigator');
