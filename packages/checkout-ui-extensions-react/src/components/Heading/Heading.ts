import {Heading as BaseHeading} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type HeadingProps = ReactPropsFromRemoteComponentType<
  typeof BaseHeading
>;

export const Heading = createRemoteReactComponent(BaseHeading);
