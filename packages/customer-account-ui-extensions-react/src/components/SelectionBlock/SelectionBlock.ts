import {SelectionBlock as BaseSelectionBlock} from '@shopify/customer-account-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type SelectionBlockProps = ReactPropsFromRemoteComponentType<
  typeof BaseSelectionBlock
>;

export const SelectionBlock = createRemoteReactComponent(BaseSelectionBlock);
