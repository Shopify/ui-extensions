import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {Page as BasePage} from '@shopify/argo/components';

export type PageProps = ReactPropsFromRemoteComponentType<typeof BasePage>;
export const Page = createRemoteReactComponent(BasePage);
