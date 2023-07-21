import {createRemoteComponent} from '@remote-ui/core';

export interface TileProps {
  title: string;
  subtitle?: string;
  enabled?: boolean;
  destructive?: boolean;
  badgeValue?: number;
  onPress?: () => void;
}

export const Tile = createRemoteComponent<'Tile', TileProps>('Tile');
