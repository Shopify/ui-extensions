import {createRemoteComponent} from '@remote-ui/core';

export type BannerVariant = 'confirmation' | 'alert' | 'error' | 'information';

export interface BannerProps {
  title: string;
  variant: BannerVariant;
  action?: string;
  onPress?: () => void;
  visible: boolean;
}

export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
