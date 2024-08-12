import {View as BaseView} from '@shopify/ui-extensions/checkout';
//@ts-ignore
import {createRemoteComponent} from '@remote-dom/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ViewProps = ReactPropsFromRemoteComponentType<typeof BaseView>;

export const View = createRemoteComponent('ui-view', BaseView);
