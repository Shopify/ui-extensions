import {createRemoteComponent} from '../utilities';

export type BannerStatus = 'success' | 'info' | 'warning' | 'critical';
export interface BannerAction {
  onAction: () => void;
  content: string;
}

export interface BannerProps {
  action?: BannerAction;
  status?: BannerStatus;
  title?: string;
  onDismiss: () => void;
}

export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
