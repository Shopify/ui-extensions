import {createRemoteComponent} from '@remote-ui/core';
import type {BannerProps as BaseBannerProps} from '@shopify/ui-api-design/dist/components/Banner';

export interface BannerProps
  extends Pick<
    BaseBannerProps,
    'onDismiss' | 'dismissible' | 'collapsible' | 'heading' | 'id'
  > {
  tone?: Extract<
    BaseBannerProps['tone'],
    'auto' | 'info' | 'success' | 'warning' | 'critical'
  >;
}

/**
 * Use banners to communicate important messages to customers in a prominent way.
 */
export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
