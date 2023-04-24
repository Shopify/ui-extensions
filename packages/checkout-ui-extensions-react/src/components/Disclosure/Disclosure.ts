import {Disclosure as BaseDisclosure} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type DisclosureProps = ReactPropsFromRemoteComponentType<
  typeof BaseDisclosure
>;

export const Disclosure = createRemoteReactComponent(BaseDisclosure);
