import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {TextField as BaseTextField} from '@shopify/argo/components';

export type TextFieldProps = ReactPropsFromRemoteComponentType<typeof BaseTextField>;
export const TextField = createRemoteReactComponent(BaseTextField);
