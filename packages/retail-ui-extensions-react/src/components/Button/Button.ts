import {Button as BaseButton} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {ButtonProps} from '@shopify/retail-ui-extensions';

export const Button = createRemoteReactComponent(BaseButton);
