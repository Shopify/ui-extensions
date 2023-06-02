import {TextBlock as BaseTextBlock} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const TextBlock = createRemoteReactComponent(BaseTextBlock);
export type TextBlockProps = ReactPropsFromRemoteComponentType<
  typeof BaseTextBlock
>;
