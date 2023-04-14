import {Dialog as BaseDialog} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {DialogProps} from '@shopify/retail-ui-extensions';

export const Dialog = createRemoteReactComponent(BaseDialog);
