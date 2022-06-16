import {PageBlock as BasePageBlock} from '@shopify/customer-account-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type PageBlockProps = ReactPropsFromRemoteComponentType<
  typeof BasePageBlock
>;

export const PageBlock = createRemoteReactComponent(BasePageBlock);
