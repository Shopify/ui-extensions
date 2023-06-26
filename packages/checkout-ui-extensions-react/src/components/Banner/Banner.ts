import {Banner as BaseBanner} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type BannerProps = ReactPropsFromRemoteComponentType<typeof BaseBanner>;

export const Banner = createRemoteReactComponent(BaseBanner);
