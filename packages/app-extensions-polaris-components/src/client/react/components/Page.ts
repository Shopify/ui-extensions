import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Page as BasePage} from '../../core';

export type PageProps = ReactPropsFromRemoteComponentType<typeof BasePage>;
export const Page = createRemoteReactComponent(BasePage);
