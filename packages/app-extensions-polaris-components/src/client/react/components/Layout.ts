import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Layout as BaseLayout} from '../../core';

export type LayoutProps = ReactPropsFromRemoteComponentType<typeof BaseLayout>;
export const Layout = createRemoteReactComponent(BaseLayout);
