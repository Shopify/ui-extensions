import {TextBlock as BaseTextBlock} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type TextBlockProps = ReactPropsFromRemoteComponentType<
  typeof BaseTextBlock
>;

export const TextBlock = createRemoteReactComponent(BaseTextBlock);
