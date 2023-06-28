import {InlineStack as BaseInlineStack} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type InlineStackProps = ReactPropsFromRemoteComponentType<
  typeof BaseInlineStack
>;

export const InlineStack = createRemoteReactComponent(BaseInlineStack);
