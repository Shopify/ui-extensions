import {createRemoteComponent} from '@remote-ui/core';

type Source = 'cancelSmallMinor' | 'searchMinor' | 'starHollow' | 'starFilled' | 'sortMinor';

export interface IconProps {
  source: Source;
  accessibilityLabel?: string;
}

export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
