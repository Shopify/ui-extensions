import {CalloutBanner as BaseCalloutBanner} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type CalloutBannerProps = ReactPropsFromRemoteComponentType<
  typeof BaseCalloutBanner
>;

export const CalloutBanner = createRemoteReactComponent(BaseCalloutBanner);
