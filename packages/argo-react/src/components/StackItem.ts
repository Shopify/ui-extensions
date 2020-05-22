import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {StackItem as BaseStackItem} from '@shopify/argo/components';

export type StackItemProps = ReactPropsFromRemoteComponentType<typeof BaseStackItem>;
export const StackItem = createRemoteReactComponent(BaseStackItem);
