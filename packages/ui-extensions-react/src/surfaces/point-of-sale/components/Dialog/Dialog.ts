import {Dialog as BaseDialog} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {DialogProps} from '@shopify/ui-extensions/point-of-sale';

export const Dialog = createRemoteReactComponent(BaseDialog);
