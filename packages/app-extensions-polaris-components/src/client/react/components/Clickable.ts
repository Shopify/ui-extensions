import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Clickable as BaseClickable} from '../../core';

export type ClickableProps = ReactPropsFromRemoteComponentType<typeof BaseClickable>;
export const Clickable = createRemoteReactComponent(BaseClickable);
