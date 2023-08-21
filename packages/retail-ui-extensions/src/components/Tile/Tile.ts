import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export interface TileProps extends TestableComponentProps {
  title: string;
  subtitle?: string;
  enabled?: boolean;
  destructive?: boolean;
  badgeValue?: number;
  onPress?: () => void;
}

export const Tile = createRemoteComponent<'Tile', TileProps>('Tile');
