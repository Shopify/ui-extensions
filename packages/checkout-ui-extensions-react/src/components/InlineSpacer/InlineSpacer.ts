import {InlineSpacer as BaseInlineSpacer} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type InlineSpacerProps = ReactPropsFromRemoteComponentType<
  typeof BaseInlineSpacer
>;

export const InlineSpacer = createRemoteReactComponent(BaseInlineSpacer);
