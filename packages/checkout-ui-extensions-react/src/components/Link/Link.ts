import {Link as BaseLink} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type LinkProps = ReactPropsFromRemoteComponentType<typeof BaseLink>;

export const Link = createRemoteReactComponent(BaseLink, {
  fragmentProps: ['overlay'],
});
