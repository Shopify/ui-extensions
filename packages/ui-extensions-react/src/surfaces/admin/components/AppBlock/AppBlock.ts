import {AppBlock as BaseAppBlock} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const AppBlock = createRemoteReactComponent(BaseAppBlock);

export type AppBlockProps = ReactPropsFromRemoteComponentType<
  typeof BaseAppBlock
>;
