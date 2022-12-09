import {Link as BaseLink} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type LinkProps = ReactPropsFromRemoteComponentType<typeof BaseLink>;

export const Link = createRemoteReactComponent(BaseLink, {
  fragmentProps: ['overlay'],
});
