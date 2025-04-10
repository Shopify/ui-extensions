import {createRemoteComponent} from '@remote-ui/core';
import type {BannerProps as BaseBannerProps} from '@shopify/ui-api-design/dist/components/Banner';

export interface BannerProps
  extends Omit<
    BaseBannerProps,
    'children' | 'primaryAction' | 'secondaryActions' | 'tone'
  > {
  tone?: Extract<
    BaseBannerProps['tone'],
    'auto' | 'info' | 'success' | 'warning' | 'critical'
  >;
}

export const bannerTones = [
  'auto',
  'info',
  'success',
  'warning',
  'critical',
] satisfies BannerProps['tone'][];

/**
 * Use banners to communicate important messages to customers in a prominent way.
 */
export interface BannerElement
  extends Omit<BannerProps, 'onAfterHide' | 'onDismiss'>,
    Omit<HTMLElement, 'id' | 'title' | 'hidden'> {
  onafterhide: BannerProps['onAfterHide'];
  ondismiss: BannerProps['onDismiss'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-banner': BannerElement;
  }
}

export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
