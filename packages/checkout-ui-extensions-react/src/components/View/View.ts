import {View as BaseView} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ViewProps = ReactPropsFromRemoteComponentType<typeof BaseView>;

export const View = createRemoteReactComponent(BaseView);
