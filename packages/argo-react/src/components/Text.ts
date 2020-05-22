import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {Text as BaseText} from '@shopify/argo/components';

export type TextProps = ReactPropsFromRemoteComponentType<typeof BaseText>;
export const Text = createRemoteReactComponent(BaseText);
