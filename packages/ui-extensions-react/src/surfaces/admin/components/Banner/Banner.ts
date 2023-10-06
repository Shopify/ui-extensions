import {Banner as BaseBanner} from '@shopify/ui-extensions/admin';
import type {BannerProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Banner = createRemoteReactComponent<'Banner', BannerProps>(
  BaseBanner,
);
export type {BannerProps} from '@shopify/ui-extensions/admin';
