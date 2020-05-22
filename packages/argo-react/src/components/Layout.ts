import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {Layout as BaseLayout} from '@shopify/argo/components';

export type LayoutProps = ReactPropsFromRemoteComponentType<typeof BaseLayout>;
export const Layout = createRemoteReactComponent(BaseLayout);
