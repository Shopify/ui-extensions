import {Banner as BaseBanner} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type BannerProps = ReactPropsFromRemoteComponentType<typeof BaseBanner>;

export const Banner = createRemoteReactComponent(BaseBanner);
