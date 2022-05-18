import {HeadingGroup as BaseHeadingGroup} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type HeadingGroupProps = ReactPropsFromRemoteComponentType<
  typeof BaseHeadingGroup
>;

export const HeadingGroup = createRemoteReactComponent(BaseHeadingGroup);
