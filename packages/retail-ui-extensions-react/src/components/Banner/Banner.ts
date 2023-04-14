import {Banner as BaseBanner} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {BannerProps} from '@shopify/retail-ui-extensions';

export const Banner = createRemoteReactComponent(BaseBanner);
