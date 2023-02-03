import {Spinner as BaseSpinner} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Spinner = createRemoteReactComponent(BaseSpinner);
export type {SpinnerProps} from '@shopify/ui-extensions/admin';
