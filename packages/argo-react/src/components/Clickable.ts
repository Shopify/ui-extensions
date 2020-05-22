import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {Clickable as BaseClickable} from '@shopify/argo/components';

export type ClickableProps = ReactPropsFromRemoteComponentType<typeof BaseClickable>;
export const Clickable = createRemoteReactComponent(BaseClickable);
