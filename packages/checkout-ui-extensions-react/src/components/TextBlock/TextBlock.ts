import {TextBlock as BaseTextBlock} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type TextBlockProps = ReactPropsFromRemoteComponentType<
  typeof BaseTextBlock
>;

export const TextBlock = createRemoteReactComponent(BaseTextBlock);
