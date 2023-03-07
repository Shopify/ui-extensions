import {createRemoteComponent} from '@remote-ui/core';

export type BannerType = 'confirmation' | 'alert' | 'error' | 'information';

export interface BannerProps {
  title: string;
  variant: BannerType;
  action?: string;
  onPress?: () => void;
  visible: boolean;
}

export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
