import {Banner as BaseBanner} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {BannerProps} from '@shopify/ui-extensions/point-of-sale';

export const Banner = createRemoteReactComponent(BaseBanner);
