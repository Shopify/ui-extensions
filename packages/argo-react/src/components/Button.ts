import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {Button as BaseButton} from '@shopify/argo/components';

export type ButtonProps = ReactPropsFromRemoteComponentType<typeof BaseButton>;
export const Button = createRemoteReactComponent(BaseButton);
